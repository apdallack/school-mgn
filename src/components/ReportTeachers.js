import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ReportTeachers = () => {
  const [teachers, setTeachers] = useState([
    { id: 1, firstName: 'Maxamed', lastName: 'Xuseen', email: 'maxamed.xuseen@example.com', subject: 'Mathematics', phone: '123-456-7890', hireDate: '2022-03-10' },
    { id: 2, firstName: 'Farxiya', lastName: 'Ismaciil', email: 'farxiya.ismaciil@example.com', subject: 'English', phone: '098-765-4321', hireDate: '2021-11-15' },
    { id: 3, firstName: 'Cumar', lastName: 'Cali', email: 'cumar.cali@example.com', subject: 'Physics', phone: '234-567-8901', hireDate: '2022-02-25' },
    { id: 4, firstName: 'Nasra', lastName: 'Cabdulle', email: 'nasra.cabdulle@example.com', subject: 'Biology', phone: '345-678-9012', hireDate: '2021-12-05' },
    { id: 5, firstName: 'Ibrahim', lastName: 'Maxamed', email: 'ibrahim.maxamed@example.com', subject: 'Chemistry', phone: '456-789-0123', hireDate: '2022-01-20' },
    { id: 6, firstName: 'Fardowsa', lastName: 'Xasan', email: 'fardowsa.xasan@example.com', subject: 'History', phone: '567-890-1234', hireDate: '2021-10-30' },
    { id: 7, firstName: 'Cabdiqaadir', lastName: 'Farah', email: 'cabdiqaadir.farah@example.com', subject: 'Geography', phone: '678-901-2345', hireDate: '2022-04-02' },
    { id: 8, firstName: 'Safiya', lastName: 'Ali', email: 'safiya.ali@example.com', subject: 'Computer Science', phone: '789-012-3456', hireDate: '2021-09-12' },
    { id: 9, firstName: 'Xuseen', lastName: 'Ibraahim', email: 'xuseen.ibraahim@example.com', subject: 'Art', phone: '890-123-4567', hireDate: '2022-03-05' },
    { id: 10, firstName: 'Khadra', lastName: 'Cismaan', email: 'khadra.cismaan@example.com', subject: 'Music', phone: '901-234-5678', hireDate: '2021-11-25' },
    { id: 11, firstName: 'Abdikariim', lastName: 'Yuusuf', email: 'abdikariim.yuusuf@example.com', subject: 'Physical Education', phone: '012-345-6789', hireDate: '2022-02-15' },
    { id: 12, firstName: 'Halimo', lastName: 'Maxamuud', email: 'halimo.maxamuud@example.com', subject: 'Economics', phone: '123-456-7890', hireDate: '2021-12-20' },
    { id: 13, firstName: 'Cali', lastName: 'Xuseen', email: 'cali.xuseen@example.com', subject: 'Business Studies', phone: '234-567-8901', hireDate: '2022-01-10' },
    { id: 14, firstName: 'Hawa', lastName: 'Xirsi', email: 'hawa.xirsi@example.com', subject: 'Literature', phone: '345-678-9012', hireDate: '2021-08-30' },
    { id: 15, firstName: 'Mustafe', lastName: 'Yuusuf', email: 'mustafe.yuusuf@example.com', subject: 'Psychology', phone: '456-789-0123', hireDate: '2022-04-05' },
    { id: 16, firstName: 'Sumaya', lastName: 'Cali', email: 'sumaya.cali@example.com', subject: 'Sociology', phone: '567-890-1234', hireDate: '2021-09-05' },
    { id: 17, firstName: 'Ali', lastName: 'Ismail', email: 'ali.ismail@example.com', subject: 'Political Science', phone: '678-901-2345', hireDate: '2022-03-20' },
    { id: 18, firstName: 'Amina', lastName: 'Hassan', email: 'amina.hassan@example.com', subject: 'Health Education', phone: '789-012-3456', hireDate: '2021-10-10' },
    { id: 19, firstName: 'Faysal', lastName: 'Omar', email: 'faysal.omar@example.com', subject: 'Environmental Science', phone: '890-123-4567', hireDate: '2022-02-10' },
    { id: 20, firstName: 'Ayan', lastName: 'Abdirahman', email: 'ayan.abdirahman@example.com', subject: 'Anthropology', phone: '901-234-5678', hireDate: '2021-11-10' }
  ]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleEdit = (teacher) => {
    setSelectedTeacher(teacher);
    setShowEditModal(true);
  };

  const handleDelete = (teacher) => {
    setSelectedTeacher(teacher);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    setShowEditModal(false);
    // Save changes to teacher
  };

  const handleConfirmDelete = () => {
    setTeachers(teachers.filter(teacher => teacher.id !== selectedTeacher.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Teacher Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Subject</th>
            <th>Phone</th>
            <th>Hire Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map(teacher => (
            <tr key={teacher.id}>
              <td>{teacher.id}</td>
              <td>{teacher.firstName}</td>
              <td>{teacher.lastName}</td>
              <td>{teacher.email}</td>
              <td>{teacher.subject}</td>
              <td>{teacher.phone}</td>
              <td>{teacher.hireDate}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(teacher)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(teacher)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="editFirstName">First Name</label>
              <input type="text" className="form-control" id="editFirstName" defaultValue={selectedTeacher?.firstName} />
            </div>
            <div className="form-group">
              <label htmlFor="editLastName">Last Name</label>
              <input type="text" className="form-control" id="editLastName" defaultValue={selectedTeacher?.lastName} />
            </div>
            <div className="form-group">
              <label htmlFor="editEmail">Email</label>
              <input type="email" className="form-control" id="editEmail" defaultValue={selectedTeacher?.email} />
            </div>
            <div className="form-group">
              <label htmlFor="editSubject">Subject</label>
              <input type="text" className="form-control" id="editSubject" defaultValue={selectedTeacher?.subject} />
            </div>
            <div className="form-group">
              <label htmlFor="editPhone">Phone</label>
              <input type="text" className="form-control" id="editPhone" defaultValue={selectedTeacher?.phone} />
            </div>
            <div className="form-group">
              <label htmlFor="editHireDate">Hire Date</label>
              <input type="date" className="form-control" id="editHireDate" defaultValue={selectedTeacher?.hireDate} />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Delete Modal */}
      <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Teacher</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedTeacher?.firstName} {selectedTeacher?.lastName}?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ReportTeachers;
