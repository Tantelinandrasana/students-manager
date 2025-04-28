import lombok.Getter;
import lombok.Setter;
@Entity
@Getter @Setter
public class Student {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;

    // Getters & Setters (na Lombok: @Data)
}
