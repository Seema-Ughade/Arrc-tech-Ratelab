import React, { useState } from 'react';
import { ArrowLeft, Paperclip, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TicketReply = () => {
  const navigate = useNavigate();
  const [reply, setReply] = useState('');
  const [files, setFiles] = useState([]);

  const ticket = {
    id: '819197',
    status: 'Open',
    subject: 'profile update error',
    messages: [
      {
        user: 'Gopal pm',
        username: '@Gopal pm',
        timestamp: 'Tuesday, 31st December 2024 @ 12:06 pm',
        message: 'hello admin resolve my problem'
      }
    ]
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate(-1)}
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
        <div className="flex items-center gap-2 mb-4">
          <span className="px-3 py-1 rounded-full text-green-700 bg-green-100">
            {ticket.status}
          </span>
          <h2 className="text-lg font-medium">
            [{`Ticket#${ticket.id}`}] {ticket.subject}
          </h2>
        </div>

        <div className="border rounded-lg p-4 mb-6">
          {ticket.messages.map((message, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-200 rounded-full" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
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
            <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
              <Paperclip className="w-5 h-5" />
              Add Attachment
            </button>
            <p className="mt-2 text-sm text-gray-500">
              Max 5 files can be uploaded | Maximum upload size is 256MB | Allowed File Extensions: jpg, jpeg, png, pdf, doc, docx
            </p>
          </div>

          <button className="flex items-center justify-center gap-2 w-full p-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
            <Send className="w-5 h-5" />
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default TicketReply;

