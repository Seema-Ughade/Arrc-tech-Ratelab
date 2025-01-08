import React, { useState, useCallback } from 'react';
import * as XLSX from 'xlsx';
import { Chart } from "react-google-charts";
import { UploadOutlined, SyncOutlined, StarFilled, EyeOutlined, DeleteOutlined } from '@ant-design/icons';
import { Button, Upload, Card, Table, Row, Col, Typography, Statistic, Space, message, Input, Modal } from 'antd';

const { Title, Text } = Typography;
const { Search } = Input;

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <StarFilled key={star} style={{ color: star <= rating ? '#FFB547' : '#D9D9D9' }} />
      ))}
    </div>
  );
};

const AllCompany = () => {
  const [reviews, setReviews] = useState([]);
  const [fileName, setFileName] = useState('');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedReview, setSelectedReview] = useState(null);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const processFile = useCallback((file) => {
    setLoading(true);
    const reader = new FileReader();
    
    reader.onload = (e) => {
      try {
        const fileData = e.target.result;
        const workbook = XLSX.read(fileData, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const processedData = rawData.slice(1).map((row, index) => ({
          id: index + 1,
          sn: index + 1,
          reviewer: String(row[0] || ''),
          username: String(row[1] || ''),
          company: String(row[2] || ''),
          review: String(row[3] || ''),
          fullReview: String(row[3] || ''),
          rating: Number(row[4]) || 0,
        }));

        setReviews(processedData);
        message.success('Data processed successfully');
      } catch (error) {
        console.error('Error processing file:', error);
        message.error('Error processing file. Please check the file format and try again.');
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = (event) => {
      console.error('FileReader error:', event);
      if (event.target.error.name === 'NotReadableError') {
        message.error('Error reading file. Please check file permissions and try again.');
      } else {
        message.error('An error occurred while reading the file. Please try again.');
      }
      setLoading(false);
    };

    try {
      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error initiating file read:', error);
      message.error('Error reading file. Please try again or use a different file.');
      setLoading(false);
    }
  }, []);

  const handleFileUpload = useCallback((info) => {
    const { status, name, originFileObj } = info.file;
    if (status === 'done') {
      setFileName(name);
      setUploadedFile(originFileObj);
      processFile(originFileObj);
    } else if (status === 'error') {
      message.error(`${name} file upload failed.`);
    }
  }, [processFile]);

  const handleRefresh = useCallback(() => {
    if (uploadedFile) {
      processFile(uploadedFile);
    } else {
      message.warning('No file uploaded. Please upload a file first.');
    }
  }, [uploadedFile, processFile]);

  const handleDelete = useCallback((confirmed) => {
    if (confirmed) {
      setReviews(reviews.filter(review => review.id !== selectedReview.id));
      message.success('Review deleted successfully');
    }
    setShowDeleteModal(false);
    setSelectedReview(null);
  }, [reviews, selectedReview]);

  const filteredReviews = React.useMemo(() => {
    return reviews.filter(review =>
      (typeof review.reviewer === 'string' && review.reviewer.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof review.company === 'string' && review.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof review.review === 'string' && review.review.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [reviews, searchQuery]);

  const averageRating = React.useMemo(() => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (sum / reviews.length).toFixed(2);
  }, [reviews]);

  const ratingDistribution = React.useMemo(() => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
      distribution[Math.floor(review.rating) - 1]++;
    });
    return [
      ['Rating', 'Count'],
      ['1 Star', distribution[0]],
      ['2 Stars', distribution[1]],
      ['3 Stars', distribution[2]],
      ['4 Stars', distribution[3]],
      ['5 Stars', distribution[4]],
    ];
  }, [reviews]);

  const columns = [
    { title: 'S.N.', dataIndex: 'sn', key: 'sn' },
    { title: 'Reviewer', dataIndex: 'reviewer', key: 'reviewer',
      render: (text, record) => (
        <div>
          <div>{text}</div>
          <div className="text-blue-500 text-sm">{record.username}</div>
        </div>
      )
    },
    { title: 'Company', dataIndex: 'company', key: 'company' },
    { title: 'Review', dataIndex: 'review', key: 'review',
      render: (text, record) => (
        <div>
          <div>{text}</div>
          <StarRating rating={record.rating} />
        </div>
      )
    },
    { title: 'Action', key: 'action',
      render: (_, record) => (
        <Space>
          <Button
            icon={<EyeOutlined />}
            onClick={() => {
              setSelectedReview(record);
              setShowReviewModal(true);
            }}
          >
            View
          </Button>
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => {
              setSelectedReview(record);
              setShowDeleteModal(true);
            }}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <Card className="w-full max-w-7xl mx-auto" title={<Title level={2}>Reviews Dashboard</Title>}>
        <Space direction="vertical" size="large" className="w-full">
          <div>
            <Text>Upload your Excel file to view customer reviews</Text>
            <div className="flex items-center space-x-4 mt-4">
              <Upload
                accept=".xlsx, .xls"
                showUploadList={false}
                customRequest={({ file, onSuccess }) => {
                  setTimeout(() => {
                    onSuccess("ok");
                  }, 0);
                }}
                onChange={handleFileUpload}
              >
                <Button icon={<UploadOutlined />}>Upload File</Button>
              </Upload>
              <Button
                icon={<SyncOutlined />}
                onClick={handleRefresh}
                disabled={!uploadedFile || loading}
                loading={loading}
              >
                Refresh Data
              </Button>
              {fileName && (
                <Text type="secondary">
                  Current file: {fileName}
                </Text>
              )}
            </div>
          </div>

          {reviews.length > 0 && (
            <Space direction="vertical" size="large" className="w-full">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12} md={8}>
                  <Card>
                    <Statistic
                      title="Average Rating"
                      value={averageRating}
                      precision={2}
                      valueStyle={{ color: '#3f8600' }}
                      prefix={<StarFilled />}
                      suffix="/ 5"
                    />
                  </Card>
                </Col>
                <Col xs={24} sm={12} md={8}>
                  <Card>
                    <Statistic
                      title="Total Reviews"
                      value={reviews.length}
                      valueStyle={{ color: '#1890ff' }}
                    />
                  </Card>
                </Col>
                <Col xs={24} md={8}>
                  <Card>
                    <Chart
                      width={'100%'}
                      height={'200px'}
                      chartType="PieChart"
                      loader={<div>Loading Chart</div>}
                      data={ratingDistribution}
                      options={{
                        title: 'Rating Distribution',
                        pieHole: 0.4,
                        colors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#1890ff'],
                      }}
                    />
                  </Card>
                </Col>
              </Row>

              <Card title="All Reviews">
                <Space direction="vertical" size="middle" className="w-full">
                  <Search
                    placeholder="Search reviews..."
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={(value) => setSearchQuery(value)}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Table
                    dataSource={filteredReviews}
                    columns={columns}
                    rowKey="id"
                    pagination={{ pageSize: 10 }}
                  />
                </Space>
              </Card>
            </Space>
          )}

          {reviews.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Text>No reviews to display. Please upload an Excel file with review data.</Text>
            </div>
          )}
        </Space>
      </Card>

      {/* Review Modal */}
      <Modal
        title={`Review by ${selectedReview?.reviewer}`}
        visible={showReviewModal}
        onCancel={() => {
          setShowReviewModal(false);
          setSelectedReview(null);
        }}
        footer={[
          <Button key="close" onClick={() => {
            setShowReviewModal(false);
            setSelectedReview(null);
          }}>
            Close
          </Button>
        ]}
      >
        <p>{selectedReview?.fullReview}</p>
        <div className="mt-4">
          <StarRating rating={selectedReview?.rating || 0} />
        </div>
      </Modal>

      {/* Delete Confirmation Modal */}
      <Modal
        title="Delete Confirmation"
        visible={showDeleteModal}
        onCancel={() => {
          setShowDeleteModal(false);
          setSelectedReview(null);
        }}
        footer={[
          <Button key="cancel" onClick={() => {
            setShowDeleteModal(false);
            setSelectedReview(null);
          }}>
            Cancel
          </Button>,
          <Button key="delete" type="primary" danger onClick={() => handleDelete(true)}>
            Delete
          </Button>
        ]}
      >
        <p>Are you sure you want to delete this review?</p>
      </Modal>
    </div>
  );
};

export default AllCompany;

