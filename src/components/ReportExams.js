import React, { useState } from 'react';
import { Modal, Button, Table } from 'react-bootstrap';

const ReportExams = () => {
  const [exams, setExams] = useState([
    { id: 1, examName: 'Midterm', examDate: '2022-11-15', subject: 'Mathematics', class: 'Grade 1' },
    { id: 2, examName: 'Final', examDate: '2022-12-20', subject: 'English', class: 'Grade 2' },
    { id: 3, examName: 'Quarterly', examDate: '2022-10-10', subject: 'Science', class: 'Grade 3' },
    { id: 4, examName: 'Monthly', examDate: '2022-09-15', subject: 'History', class: 'Grade 4' },
    { id: 5, examName: 'Unit Test', examDate: '2022-08-25', subject: 'Geography', class: 'Grade 5' },
    { id: 6, examName: 'Semester', examDate: '2022-12-01', subject: 'Physics', class: 'Grade 6' },
    { id: 7, examName: 'Annual', examDate: '2022-11-30', subject: 'Chemistry', class: 'Grade 7' },
    { id: 8, examName: 'Pre-board', examDate: '2022-12-05', subject: 'Biology', class: 'Grade 8' },
    { id: 9, examName: 'Mock Test', examDate: '2022-10-20', subject: 'Mathematics', class: 'Grade 9' },
    { id: 10, examName: 'Class Test', examDate: '2022-09-10', subject: 'English', class: 'Grade 10' },
    { id: 11, examName: 'Midterm', examDate: '2023-01-15', subject: 'History', class: 'Grade 1' },
    { id: 12, examName: 'Final', examDate: '2023-02-20', subject: 'Science', class: 'Grade 2' },
    { id: 13, examName: 'Quarterly', examDate: '2023-03-10', subject: 'Geography', class: 'Grade 3' },
    { id: 14, examName: 'Monthly', examDate: '2023-04-15', subject: 'Physics', class: 'Grade 4' },
    { id: 15, examName: 'Unit Test', examDate: '2023-05-25', subject: 'Chemistry', class: 'Grade 5' },
    { id: 16, examName: 'Semester', examDate: '2023-06-01', subject: 'Biology', class: 'Grade 6' },
    { id: 17, examName: 'Annual', examDate: '2023-07-30', subject: 'Mathematics', class: 'Grade 7' },
    { id: 18, examName: 'Pre-board', examDate: '2023-08-05', subject: 'English', class: 'Grade 8' },
    { id: 19, examName: 'Mock Test', examDate: '2023-09-20', subject: 'History', class: 'Grade 9' },
    { id: 20, examName: 'Class Test', examDate: '2023-10-10', subject: 'Science', class: 'Grade 10' },
    { id: 21, examName: 'Midterm', examDate: '2023-11-15', subject: 'Geography', class: 'Grade 1' },
    { id: 22, examName: 'Final', examDate: '2023-12-20', subject: 'Physics', class: 'Grade 2' },
    { id: 23, examName: 'Quarterly', examDate: '2023-12-10', subject: 'Chemistry', class: 'Grade 3' },
    { id: 24, examName: 'Monthly', examDate: '2023-12-15', subject: 'Biology', class: 'Grade 4' },
    { id: 25, examName: 'Unit Test', examDate: '2023-11-25', subject: 'Mathematics', class: 'Grade 5' },
    { id: 26, examName: 'Semester', examDate: '2023-10-01', subject: 'English', class: 'Grade 6' },
    { id: 27, examName: 'Annual', examDate: '2023-09-30', subject: 'History', class: 'Grade 7' },
    { id: 28, examName: 'Pre-board', examDate: '2023-08-05', subject: 'Science', class: 'Grade 8' },
    { id: 29, examName: 'Mock Test', examDate: '2023-07-20', subject: 'Geography', class: 'Grade 9' },
    { id: 30, examName: 'Class Test', examDate: '2023-06-10', subject: 'Physics', class: 'Grade 10' },
  ]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedExam, setSelectedExam] = useState(null);

  const handleEdit = (exam) => {
    setSelectedExam(exam);
    setShowEditModal(true);
  };

  const handleDelete = (exam) => {
    setSelectedExam(exam);
    setShowDeleteModal(true);
  };

  const handleSave = () => {
    setShowEditModal(false);
    // Save changes to exam
  };

  const handleConfirmDelete = () => {
    setExams(exams.filter(exam => exam.id !== selectedExam.id));
    setShowDeleteModal(false);
  };

  return (
    <div className="container mt-5">
      <h2>Exam Reports</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Exam Name</th>
            <th>Exam Date</th>
            <th>Subject</th>
            <th>Class</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exams.map(exam => (
            <tr key={exam.id}>
              <td>{exam.id}</td>
              <td>{exam.examName}</td>
              <td>{exam.examDate}</td>
              <td>{exam.subject}</td>
              <td>{exam.class}</td>
              <td>
                <Button variant="warning" onClick={() => handleEdit(exam)}>Edit</Button>
                {' '}
                <Button variant="danger" onClick={() => handleDelete(exam)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="editExamName">Exam Name</label>
              <input type="text" className="form-control" id="editExamName" defaultValue={selectedExam?.examName} />
            </div>
            <div className="form-group">
              <label htmlFor="editExamDate">Exam Date</label>
              <input type="date" className="form-control" id="editExamDate" defaultValue={selectedExam?.examDate} />
            </div>
            <div className="form-group">
              <label htmlFor="editSubject">Subject</label>
              <input type="text" className="form-control" id="editSubject" defaultValue={selectedExam?.subject} />
            </div>
            <div className="form-group">
              <label htmlFor="editClass">Class</label>
              <input type="text" className="form-control" id="editClass" defaultValue={selectedExam?.class} />
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
          <Modal.Title>Delete Exam</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete {selectedExam?.examName}?
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

export default ReportExams;
