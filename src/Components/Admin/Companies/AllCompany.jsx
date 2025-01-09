// import React, { useState, useCallback, useEffect } from 'react';
// import * as XLSX from 'xlsx';
// import { Chart } from "react-google-charts";
// import { UploadOutlined, SyncOutlined, StarFilled, EyeOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
// import { Button, Upload, Card, Table, Row, Col, Typography, Statistic, Space, message, Input, Modal } from 'antd';
// import axios from 'axios';

// const { Title, Text } = Typography;
// const { Search } = Input;

// const StarRating = ({ rating }) => {
//   return (
//     <div className="flex">
//       {[1, 2, 3, 4, 5].map((star) => (
//         <StarFilled key={star} style={{ color: star <= rating ? '#FFB547' : '#D9D9D9' }} />
//       ))}
//     </div>
//   );
// };

// const AllCompany = () => {
//   const [reviews, setReviews] = useState([]);
//   const [fileName, setFileName] = useState('');
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [selectedReview, setSelectedReview] = useState(null);
//   const [showReviewModal, setShowReviewModal] = useState(false);
//   const [showDeleteModal, setShowDeleteModal] = useState(false);

//   useEffect(() => {
//     fetchReviews();
//   }, []);

//   const fetchReviews = async () => {
//     try {
//       const response = await axios.get('https://arrc-tech-ratelab-backend.onrender.com/api/reviews');
//       setReviews(response.data);
//     } catch (error) {
//       console.error('Error fetching reviews:', error);
//       message.error('Failed to fetch reviews. Please try again.');
//     }
//   };

//   const processFile = useCallback((file) => {
//     setLoading(true);
//     const reader = new FileReader();
    
//     reader.onload = async (e) => {
//       try {
//         const fileData = e.target.result;
//         const workbook = XLSX.read(fileData, { type: 'array' });
//         const sheetName = workbook.SheetNames[0];
//         const sheet = workbook.Sheets[sheetName];
//         const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

//         const processedData = rawData.slice(1).map((row, index) => ({
//           excelId: index + 1, // Add this line to keep track of Excel row numbers
//           reviewer: String(row[0] || ''),
//           username: String(row[1] || ''),
//           company: String(row[2] || ''),
//           review: String(row[3] || ''),
//           fullReview: String(row[3] || ''),
//           rating: Number(row[4]) || 0,
//         }));

//         // Send processed data to the backend for updating
//         const response = await axios.put('https://arrc-tech-ratelab-backend.onrender.com/api/reviews', processedData);
        
//         setReviews(response.data);
//         message.success('Data processed and updated successfully');
//       } catch (error) {
//         console.error('Error processing file:', error);
//         message.error('Error processing file. Please check the file format and try again.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     reader.onerror = (event) => {
//       console.error('FileReader error:', event);
//       if (event.target.error.name === 'NotReadableError') {
//         message.error('Error reading file. Please check file permissions and try again.');
//       } else {
//         message.error('An error occurred while reading the file. Please try again.');
//       }
//       setLoading(false);
//     };

//     try {
//       reader.readAsArrayBuffer(file);
//     } catch (error) {
//       console.error('Error initiating file read:', error);
//       message.error('Error reading file. Please try again or use a different file.');
//       setLoading(false);
//     }
//   }, []);

//   const handleFileUpload = useCallback((info) => {
//     const { status, name, originFileObj } = info.file;
//     if (status === 'done') {
//       setFileName(name);
//       setUploadedFile(originFileObj);
//       processFile(originFileObj);
//     } else if (status === 'error') {
//       message.error(`${name} file upload failed.`);
//     }
//   }, [processFile]);

//   const handleRefresh = useCallback(() => {
//     if (uploadedFile) {
//       processFile(uploadedFile);
//     } else {
//       fetchReviews();
//     }
//   }, [uploadedFile, processFile, fetchReviews]);

//   const handleDelete = useCallback(async (confirmed) => {
//     if (confirmed && selectedReview) {
//       try {
//         await axios.delete(`https://arrc-tech-ratelab-backend.onrender.com/api/reviews/${selectedReview._id}`);
//         fetchReviews();
//         message.success('Review deleted successfully');
//       } catch (error) {
//         console.error('Error deleting review:', error);
//         message.error('Failed to delete review. Please try again.');
//       }
//     }
//     setShowDeleteModal(false);
//     setSelectedReview(null);
//   }, [selectedReview]);

//   const handleRemoveFile = useCallback(async () => {
//     try {
//       await axios.delete('https://arrc-tech-ratelab-backend.onrender.com/api/reviews');
//       setFileName('');
//       setUploadedFile(null);
//       fetchReviews();
//       message.success('All reviews removed successfully');
//     } catch (error) {
//       console.error('Error removing all reviews:', error);
//       message.error('Failed to remove all reviews. Please try again.');
//     }
//   }, []);

//   const filteredReviews = React.useMemo(() => {
//     return reviews.filter(review =>
//       (typeof review.reviewer === 'string' && review.reviewer.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (typeof review.company === 'string' && review.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
//       (typeof review.review === 'string' && review.review.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//   }, [reviews, searchQuery]);

//   const averageRating = React.useMemo(() => {
//     if (reviews.length === 0) return 0;
//     const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
//     return (sum / reviews.length).toFixed(2);
//   }, [reviews]);

//   const ratingDistribution = React.useMemo(() => {
//     const distribution = [0, 0, 0, 0, 0];
//     reviews.forEach(review => {
//       distribution[Math.floor(review.rating) - 1]++;
//     });
//     return [
//       ['Rating', 'Count'],
//       ['1 Star', distribution[0]],
//       ['2 Stars', distribution[1]],
//       ['3 Stars', distribution[2]],
//       ['4 Stars', distribution[3]],
//       ['5 Stars', distribution[4]],
//     ];
//   }, [reviews]);

//   const columns = [
//     { title: 'S.N.', dataIndex: 'sn', key: 'sn', render: (_, __, index) => index + 1 },
//     { title: 'Reviewer', dataIndex: 'reviewer', key: 'reviewer',
//       render: (text, record) => (
//         <div>
//           <div>{text}</div>
//           <div className="text-blue-500 text-sm">{record.username}</div>
//         </div>
//       )
//     },
//     { title: 'Company', dataIndex: 'company', key: 'company' },
//     { title: 'Review', dataIndex: 'review', key: 'review',
//       render: (text, record) => (
//         <div>
//           <div>{text}</div>
//           <StarRating rating={record.rating} />
//         </div>
//       )
//     },
//     { title: 'Action', key: 'action',
//       render: (_, record) => (
//         <Space>
//           <Button
//             icon={<EyeOutlined />}
//             onClick={() => {
//               setSelectedReview(record);
//               setShowReviewModal(true);
//             }}
//           >
//             View
//           </Button>
//           <Button
//             icon={<DeleteOutlined />}
//             danger
//             onClick={() => {
//               setSelectedReview(record);
//               setShowDeleteModal(true);
//             }}
//           >
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <Card className="w-full max-w-7xl mx-auto" title={<Title level={2}>Reviews Dashboard</Title>}>
//         <Space direction="vertical" size="large" className="w-full">
//           <div>
//             <Text>Upload your Excel file to view customer reviews</Text>
//             <div className="flex items-center space-x-4 mt-4">
//               <Upload
//                 accept=".xlsx, .xls"
//                 showUploadList={false}
//                 customRequest={({ file, onSuccess }) => {
//                   setTimeout(() => {
//                     onSuccess("ok");
//                   }, 0);
//                 }}
//                 onChange={handleFileUpload}
//               >
//                 <Button icon={<UploadOutlined />}>Upload File</Button>
//               </Upload>
//               <Button
//                 icon={<SyncOutlined />}
//                 onClick={handleRefresh}
//                 loading={loading}
//               >
//                 Refresh Data
//               </Button>
//               {fileName && (
//                 <Space>
//                   <Text type="secondary">
//                     Current file: {fileName}
//                   </Text>
//                   <Button
//                     icon={<CloseCircleOutlined />}
//                     onClick={handleRemoveFile}
//                     danger
//                   >
//                     Remove File
//                   </Button>
//                 </Space>
//               )}
//             </div>
//           </div>

//           {reviews.length > 0 && (
//             <Space direction="vertical" size="large" className="w-full">
//               <Row gutter={[16, 16]}>
//                 <Col xs={24} sm={12} md={8}>
//                   <Card>
//                     <Statistic
//                       title="Average Rating"
//                       value={averageRating}
//                       precision={2}
//                       valueStyle={{ color: '#3f8600' }}
//                       prefix={<StarFilled />}
//                       suffix="/ 5"
//                     />
//                   </Card>
//                 </Col>
//                 <Col xs={24} sm={12} md={8}>
//                   <Card>
//                     <Statistic
//                       title="Total Reviews"
//                       value={reviews.length}
//                       valueStyle={{ color: '#1890ff' }}
//                     />
//                   </Card>
//                 </Col>
//                 <Col xs={24} md={8}>
//                   <Card>
//                     <Chart
//                       width={'100%'}
//                       height={'200px'}
//                       chartType="PieChart"
//                       loader={<div>Loading Chart</div>}
//                       data={ratingDistribution}
//                       options={{
//                         title: 'Rating Distribution',
//                         pieHole: 0.4,
//                         colors: ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#1890ff'],
//                       }}
//                     />
//                   </Card>
//                 </Col>
//               </Row>

//               <Card title="All Reviews">
//                 <Space direction="vertical" size="middle" className="w-full">
//                   <Search
//                     placeholder="Search reviews..."
//                     allowClear
//                     enterButton="Search"
//                     size="large"
//                     onSearch={(value) => setSearchQuery(value)}
//                     onChange={(e) => setSearchQuery(e.target.value)}
//                   />
//                   <Table
//                     dataSource={filteredReviews}
//                     columns={columns}
//                     rowKey="_id"
//                     pagination={{ pageSize: 10 }}
//                   />
//                 </Space>
//               </Card>
//             </Space>
//           )}

//           {reviews.length === 0 && (
//             <div className="text-center py-12 text-gray-500">
//               <Text>No reviews to display. Please upload an Excel file with review data.</Text>
//             </div>
//           )}
//         </Space>
//       </Card>

//       {/* Review Modal */}
//       <Modal
//         title={`Review by ${selectedReview?.reviewer}`}
//         visible={showReviewModal}
//         onCancel={() => {
//           setShowReviewModal(false);
//           setSelectedReview(null);
//         }}
//         footer={[
//           <Button key="close" onClick={() => {
//             setShowReviewModal(false);
//             setSelectedReview(null);
//           }}>
//             Close
//           </Button>
//         ]}
//       >
//         <p>{selectedReview?.fullReview}</p>
//         <div className="mt-4">
//           <StarRating rating={selectedReview?.rating || 0} />
//         </div>
//       </Modal>

//       {/* Delete Confirmation Modal */}
//       <Modal
//         title="Delete Confirmation"
//         visible={showDeleteModal}
//         onCancel={() => {
//           setShowDeleteModal(false);
//           setSelectedReview(null);
//         }}
//         footer={[
//           <Button key="cancel" onClick={() => {
//             setShowDeleteModal(false);
//             setSelectedReview(null);
//           }}>
//             Cancel
//           </Button>,
//           <Button key="delete" type="primary" danger onClick={() => handleDelete(true)}>
//             Delete
//           </Button>
//         ]}
//       >
//         <p>Are you sure you want to delete this review?</p>
//       </Modal>
//     </div>
//   );
// };

// export default AllCompany;


import React, { useState, useCallback, useEffect, useRef } from 'react';
import * as XLSX from 'xlsx';
import { Chart } from "react-google-charts";
import { UploadOutlined, SyncOutlined, StarFilled, EyeOutlined, DeleteOutlined, CloseCircleOutlined } from '@ant-design/icons';
import { Button, Upload, Card, Table, Row, Col, Typography, Statistic, Space, message, Input, Modal } from 'antd';
import axios from 'axios';

const { Title, Text } = Typography;
const { Search } = Input;

const StarRating = ({ rating }) => {
  if (rating === 0) {
    return <span>No rating</span>;
  }
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
  const fileInputRef = useRef(null);
  const lastModifiedRef = useRef(null);

  useEffect(() => {
    fetchReviews();
    const savedFileName = localStorage.getItem('fileName');
    if (savedFileName) {
      setFileName(savedFileName);
    }

    const intervalId = setInterval(checkFileChanges, 5000); // Check every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/reviews');
      setReviews(response.data);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      message.error('Failed to fetch reviews. Please try again.');
    }
  };

  const processFile = useCallback((file) => {
    setLoading(true);
    const reader = new FileReader();
    
    reader.onload = async (e) => {
      try {
        const fileData = e.target.result;
        const workbook = XLSX.read(fileData, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const rawData = XLSX.utils.sheet_to_json(sheet, { header: 1 });

        const processedData = rawData.slice(1).map((row, index) => ({
          excelId: index + 1,
          reviewer: String(row[0] || ''),
          username: String(row[1] || ''),
          company: String(row[2] || ''),
          review: String(row[3] || ''),
          fullReview: String(row[3] || ''),
          rating: Math.max(0, Math.min(5, Number(row[4]) || 0)),
        }));

        const response = await axios.post('http://localhost:5000/api/reviews', processedData);
        setReviews(response.data);
        message.success('Data processed and saved successfully');
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
      localStorage.setItem('fileName', name);
      setUploadedFile(originFileObj);
      lastModifiedRef.current = originFileObj.lastModified;
      processFile(originFileObj);
    } else if (status === 'error') {
      message.error(`${name} file upload failed.`);
    }
  }, [processFile]);

  const checkFileChanges = useCallback(() => {
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      const currentFile = fileInputRef.current.files[0];
      if (currentFile.lastModified !== lastModifiedRef.current) {
        lastModifiedRef.current = currentFile.lastModified;
        processFile(currentFile);
      }
    }
  }, [processFile]);

  const handleRefresh = useCallback(() => {
    if (fileInputRef.current && fileInputRef.current.files[0]) {
      processFile(fileInputRef.current.files[0]);
    } else {
      fetchReviews();
    }
  }, [processFile, fetchReviews]);

  const handleDelete = useCallback(async (confirmed) => {
    if (confirmed && selectedReview) {
      try {
        await axios.delete(`http://localhost:5000/api/reviews/${selectedReview._id}`);
        fetchReviews();
        message.success('Review deleted successfully');
      } catch (error) {
        console.error('Error deleting review:', error);
        message.error('Failed to delete review. Please try again.');
      }
    }
    setShowDeleteModal(false);
    setSelectedReview(null);
  }, [selectedReview]);

  const handleRemoveFile = useCallback(async () => {
    try {
      await axios.delete('http://localhost:5000/api/reviews');
      setFileName('');
      localStorage.removeItem('fileName');
      setUploadedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      lastModifiedRef.current = null;
      fetchReviews();
      message.success('All reviews removed successfully');
    } catch (error) {
      console.error('Error removing all reviews:', error);
      message.error('Failed to remove all reviews. Please try again.');
    }
  }, []);

  const filteredReviews = React.useMemo(() => {
    return reviews.filter(review =>
      (typeof review.reviewer === 'string' && review.reviewer.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof review.company === 'string' && review.company.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (typeof review.review === 'string' && review.review.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [reviews, searchQuery]);

  const averageRating = React.useMemo(() => {
    if (reviews.length === 0) return 0;
    const validRatings = reviews.filter(review => review.rating > 0);
    if (validRatings.length === 0) return 0;
    const sum = validRatings.reduce((acc, review) => acc + review.rating, 0);
    return (sum / validRatings.length).toFixed(2);
  }, [reviews]);

  const ratingDistribution = React.useMemo(() => {
    const distribution = [0, 0, 0, 0, 0];
    reviews.forEach(review => {
      if (review.rating > 0 && review.rating <= 5) {
        distribution[Math.floor(review.rating) - 1]++;
      }
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
    { title: 'S.N.', dataIndex: 'sn', key: 'sn', render: (_, __, index) => index + 1 },
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
                beforeUpload={(file) => {
                  setUploadedFile(file);
                  return true;
                }}
              >
                <Button icon={<UploadOutlined />}>Upload File</Button>
              </Upload>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={(e) => {
                  if (e.target.files[0]) {
                    handleFileUpload({ file: { status: 'done', name: e.target.files[0].name, originFileObj: e.target.files[0] } });
                  }
                }}
              />
              <Button
                icon={<SyncOutlined />}
                onClick={handleRefresh}
                loading={loading}
              >
                Refresh Data
              </Button>
              {fileName && (
                <Space>
                  <Text type="secondary">
                    Current file: {fileName}
                  </Text>
                  <Button
                    icon={<CloseCircleOutlined />}
                    onClick={handleRemoveFile}
                    danger
                  >
                    Remove File
                  </Button>
                </Space>
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
                    rowKey="_id"
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

