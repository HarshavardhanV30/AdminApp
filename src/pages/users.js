import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const UserManagement = () => {
  const users = [
    {
      id: '#001',
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      role: 'Admin',
      status: 'Active',
      date: '2023-06-15',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      id: '#002',
      name: 'John Smith',
      email: 'john@example.com',
      role: 'User',
      status: 'Blocked',
      date: '2023-06-14',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <h4>User Management</h4>
        <button className="btn btn-primary">+ Add User</button>
      </div>

      <div style={styles.controls}>
        <input type="text" placeholder="🔍 Search users..." className="form-control" style={styles.search} />
        <select className="form-select" style={styles.select}>
          <option>All Roles</option>
          <option>User</option>
        </select>
        <select className="form-select" style={styles.select}>
          <option>All Status</option>
          <option>Active</option>
          <option>Active</option>
        </select>
        
        <button className="btn btn-success">✅ Unblock Selected</button>
      </div>

      <table className="table table-hover">
        <thead>
          <tr>
            <th><input type="checkbox" /></th>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th>Created Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td><input type="checkbox" /></td>
              <td>{user.id}</td>
              <td>
                <img src={user.avatar} alt="avatar" style={styles.avatar} />
                {user.name}
              </td>
              <td>{user.email}</td>
              <td>
                <span className={`badge ${user.role === 'Active' ? 'bg-primary' : 'bg-secondary'}`}>
                  {user.role}
                </span>
              </td>
              <td>
                <span className={`badge ${user.status === 'Active' ? 'bg-success' : 'bg-danger'}`}>
                  {user.status}
                </span>
              </td>
              <td>{user.date}</td>
              <td>
                <FaEdit style={styles.iconEdit} />
                <FaTrash style={styles.iconTrash} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  page: {
    padding: '20px',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '20px',
    alignItems: 'center',
  },
  controls: {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  },
  search: {
    maxWidth: '200px',
  },
  select: {
    maxWidth: '150px',
  },
  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginRight: '8px',
    objectFit: 'cover',
  },
  iconEdit: {
    color: '#007bff',
    marginRight: '10px',
    cursor: 'pointer',
  },
  iconTrash: {
    color: 'red',
    cursor: 'pointer',
  },
};

export default UserManagement;
