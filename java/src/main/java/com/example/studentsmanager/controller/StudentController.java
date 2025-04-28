@RestController
@RequestMapping("/api/students")
@CrossOrigin(origins = "*") // hahafahan'ny Angular mifanerasera
public class StudentController {
    @Autowired
    private StudentService service;

    @GetMapping
    public List<Student> getAllStudents() {
        return service.getAll();
    }

    @PostMapping
    public Student addStudent(@RequestBody Student s) {
        return service.save(s);
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable Long id) {
        service.delete(id);
    }
}
