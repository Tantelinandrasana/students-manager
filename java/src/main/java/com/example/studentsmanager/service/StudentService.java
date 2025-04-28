@Service
public class StudentService {
    @Autowired
    private StudentRepository repo;

    public List<Student> getAll() {
        return repo.findAll();
    }

    public Student save(Student s) {
        return repo.save(s);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
