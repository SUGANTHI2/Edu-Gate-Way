package com.example.edugateway_app.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.edugateway_app.entity.Student;
import com.example.edugateway_app.repository.StudentRepo;

@Service
public class StudentService {
    @Autowired
    private StudentRepo studentRepository;
     
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    
    public Student getStudentById(Long studentId) {
        Optional<Student> optionalStudent = studentRepository.findById(studentId);
        return optionalStudent.orElse(null);
}

   
    public Student createStudent(Student student) {
         studentRepository.save(student);
         return student;
    }

   
    public Student updateStudent(Long studentId, Student student) {
        if (studentRepository.existsById(studentId)) {
            student.setStudentId(studentId);
            return studentRepository.save(student);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    
    public boolean deleteStudent(Long studentId) {
        studentRepository.deleteById(studentId);
        return true;
    }

}
