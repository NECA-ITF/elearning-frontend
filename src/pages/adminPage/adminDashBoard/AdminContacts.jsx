import React from 'react';
import ContactItems from '../../../components/contactItems/ContactItems';
import './AdminContacts.css';
import AdminDashSide from './AdminDashSide/AdminDashSide';

function AdminContacts() {
  return (
    <div>
        <AdminDashSide />
        <ContactItems />
    </div>
  )
}

export default AdminContacts;


