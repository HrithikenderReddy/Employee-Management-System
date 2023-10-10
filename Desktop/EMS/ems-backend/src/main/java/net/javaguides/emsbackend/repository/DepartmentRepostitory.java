package net.javaguides.emsbackend.repository;

import net.javaguides.emsbackend.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DepartmentRepostitory extends JpaRepository<Department,Long> {

}
