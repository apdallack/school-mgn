import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ReportSubjects = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, subjectName: 'Mathematics', subjectCode: 'MATH101', teacher: 'Maxamed Xuseen' },
    { id: 2, subjectName: 'English', subjectCode: 'ENG101', teacher: 'Farxiya Ismaaciil' },
    { id: 3, subjectName: 'Physics', subjectCode: 'PHYS101', teacher: 'Cumar Cali' },
    { id: 4, subjectName: 'Biology', subjectCode: 'BIO101', teacher: 'Nasra Cabdulle' },
    { id: 5, subjectName: 'Chemistry', subjectCode: 'CHEM101', teacher: 'Ibrahim Maxamed' },
    { id: 6, subjectName: 'History', subjectCode: 'HIST101', teacher: 'Fardowsa Xasan' },
    { id: 7, subjectName: 'Geography', subjectCode: 'GEOG101', teacher: 'Cabdiqaadir Farah' },
    { id: 8, subjectName: 'Computer Science', subjectCode: 'COMP101', teacher: 'Safiya Ali' },
    { id: 9, subjectName: 'Art', subjectCode: 'ART101', teacher: 'Xuseen Ibraahim' },
    { id: 10, subjectName: 'Music', subjectCode: 'MUS101', teacher: 'Khadra Cismaan' },
    { id: 11, subjectName: 'Physical Education', subjectCode: 'PED101', teacher: 'Abdikariim Yuusuf' },
    { id: 12, subjectName: 'Economics', subjectCode: 'ECON101', teacher: 'Halimo Maxamuud' },
    { id: 13, subjectName: 'Business Studies', subjectCode: 'BUS101', teacher: 'Cali Xuseen' },
    { id: 14, subjectName: 'Literature', subjectCode: 'LIT101', teacher: 'Hawa Xirsi' },
    { id: 15, subjectName: 'Psychology', subjectCode: 'PSYCH101', teacher: 'Mustafe Yuusuf' }
  ]);
  
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleEdit = (subject) => {
    setSelectedSubject(subject);
    setShowEditModal(true);
  };

  const handleDelete = (subject) => {
    setSelectedSubject(subject);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    setShowEditModal(false);
    // Save changes to subject
  };

  const handleConfirmDelete = () => {
    setSubjects(subjects.filter(subject => subject.id !== selectedSubject.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Subject Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Teacher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map(subject => (
            <tr key={subject.id}>
              <td>{subject.id}</td>
              <td>{subject.subjectName}</td>
              <td>{subject.subjectCode}</td>
              <td>{subject.teacher}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(subject)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(subject)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="editSubjectName">Subject Name</label>
              <input type="text" className="form-control" id="editSubjectName" defaultValue={selectedSubject?.subjectName} />
            </div>
            <div className="form-group">
              <label htmlFor="editSubjectCode">Subject Code</label>
              <input type="text" className="form-control" id="editSubjectCode" defaultValue={selectedSubject?.subjectCode} />
            </div>
            <div className="form-group">
              <label htmlFor="editTeacher">Teacher</label>
              <input type="text" className="form-control" id="editTeacher" defaultValue={selectedSubject?.teacher} />
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
          <Modal.Title>Delete Subject</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedSubject?.subjectName}?
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

export default ReportSubjects;
