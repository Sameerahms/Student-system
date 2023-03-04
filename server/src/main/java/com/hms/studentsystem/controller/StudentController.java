package com.hms.studentsystem.controller;

import com.hms.studentsystem.model.Student;
import com.hms.studentsystem.service.StudentService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/student")
@CrossOrigin
public class StudentController {

  @Autowired
  private StudentService studentService;

  @PostMapping(path = "/add")
  public Student registerStudent(@RequestBody Student student) {
    studentService.saveStudent(student);
    return student;
  }

  @GetMapping
  public List<Student> getStudents() {
    return studentService.getAllStudents();
  }
}
