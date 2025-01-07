import React, { useState } from 'react';
import { Search, ArrowLeft, Paperclip, Send, X } from 'lucide-react';

const TicketList = () => {
  const [view, setView] = useState('list');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [reply, setReply] = useState('');
  const [files, setFiles] = useState([]);

  const tickets = [
    {
      id: '819197',
      subject: 'profile update error',
      submittedBy: 'Gopal pm',
      status: 'Open',
      priority: 'High',
      lastReply: '1 week ago',
      messages: [
        {
          user: 'Gopal pm',
          username: '@Gopal pm',
          timestamp: 'Tuesday, 31st December 2024 @ 12:06 pm',
          message: 'hello admin resolve my problem'
        }
      ]
    },
    {
      id: '819198',
      subject: 'Payment issue',
      submittedBy: 'John Doe',
      status: 'Closed',
      priority: 'Medium',
      lastReply: '2 days ago',
      messages: [
        {
          user: 'John Doe',
          username: '@johndoe',
          timestamp: 'Monday, 30th December 2024 @ 10:30 am',
          message: 'I\'m having trouble with my payment. Can you please help?'
        }
      ]
    },
    // Add more tickets as needed
  ];

  const getTitle = (type = 'Support Tickets') => {
    switch (type) {
      case 'pending':
        return 'Pending Tickets';
      case 'closed':
        return 'Closed Tickets';
      case 'answered':
        return 'Answered Tickets';
      default:
        return 'Support Tickets';
    }
  };

  const handleTicketClick = (ticket) => {
    setSelectedTicket(ticket);
    setView('reply');
  };

  const handleBackToList = () => {
    setSelectedTicket(null);
    setView('list');
    setReply('');
    setFiles([]);
  };

  const handleReply = () => {
    // Implement reply logic here
    console.log('Replying to ticket:', selectedTicket.id);
    console.log('Reply:', reply);
    console.log('Attachments:', files);
    // Reset form
    setReply('');
    setFiles([]);
  };

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles(prevFiles => [...prevFiles, ...uploadedFiles].slice(0, 5));
  };

  const removeFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const TicketList = () => (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl font-semibold text-gray-800">{getTitle()}</h1>
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search here..."
            className="w-full sm:w-64 pl-4 pr-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-indigo-600">
            <Search className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-indigo-600">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subject</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Submitted By</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Priority</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Last Reply</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tickets.length > 0 ? (
              tickets.map((ticket) => (
                <tr key={ticket.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <a
                      href="#"
                      className="text-indigo-600 hover:underline"
                      onClick={(e) => {
                        e.preventDefault();
                        handleTicketClick(ticket);
                      }}
                    >
                      [{`Ticket#${ticket.id}`}] {ticket.subject}
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.submittedBy}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      ticket.status === 'Open'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      ticket.priority === 'High'
                        ? 'bg-red-100 text-red-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{ticket.lastReply}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleTicketClick(ticket)}
                      className="px-4 py-2 text-sm text-indigo-600 border border-indigo-600 rounded-lg hover:bg-indigo-50"
                    >
                      Details
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-4 text-center text-gray-500">
                  Data not found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const TicketReply = () => (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={handleBackToList}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-semibold text-gray-800">Reply Ticket</h1>
        </div>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Close Ticket
        </button>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-sm text-green-700 bg-green-100">
            {selectedTicket.status}
          </span>
          <h2 className="text-lg font-medium">
            [{`Ticket#${selectedTicket.id}`}] {selectedTicket.subject}
          </h2>
        </div>

        <div className="border rounded-lg p-4 mb-6 max-h-64 overflow-y-auto">
          {selectedTicket.messages.map((message, index) => (
            <div key={index} className="flex gap-4 mb-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-1">
                  <span className="font-medium">{message.user}</span>
                  <span className="text-indigo-600">{message.username}</span>
                </div>
                <p className="text-sm text-gray-500 mb-2">{message.timestamp}</p>
                <p className="text-gray-700">{message.message}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="space-y-4">
          <textarea
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Enter reply here"
            className="w-full p-3 border rounded-lg min-h-[150px]"
          />

          <div>
            <label htmlFor="file-upload" className="cursor-pointer">
              <div className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50 inline-block">
                <Paperclip className="w-5 h-5" />
                Add Attachment
              </div>
              <input
                id="file-upload"
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept=".jpg,.jpeg,.png,.pdf,.doc,.docx"
              />
            </label>
            <p className="mt-2 text-sm text-gray-500">
              Max 5 files can be uploaded | Maximum upload size is 256MB | Allowed File Extensions: jpg, jpeg, png, pdf, doc, docx
            </p>
          </div>

          {files.length > 0 && (
            <div className="space-y-2">
              {files.map((file, index) => (
                <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded">
                  <span className="text-sm truncate">{file.name}</span>
                  <button onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={handleReply}
            className="flex items-center justify-center gap-2 w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
          >
            <Send className="w-5 h-5" />
            Reply
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 sm:p-6">
      {view === 'list' ? <TicketList /> : <TicketReply />}
    </div>
  );
};

export default TicketList;

