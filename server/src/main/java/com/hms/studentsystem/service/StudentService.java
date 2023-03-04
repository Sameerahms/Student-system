package com.hms.studentsystem.service;

import com.hms.studentsystem.model.Student;
import com.hms.studentsystem.repository.StudentRepository;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {

  @Autowired
  private StudentRepository studentRepository;

  public Student saveStudent(Student student) {
    return studentRepository.save(student);
  }

  public List<Student> getAllStudents() {
    return studentRepository.findAll();
  }
}
