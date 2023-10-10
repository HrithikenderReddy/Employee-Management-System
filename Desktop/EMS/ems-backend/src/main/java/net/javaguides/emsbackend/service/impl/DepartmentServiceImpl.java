package net.javaguides.emsbackend.service.impl;

import lombok.AllArgsConstructor;
import net.javaguides.emsbackend.dto.DepartmentDto;
import net.javaguides.emsbackend.entity.Department;
import net.javaguides.emsbackend.exception.ResourceNotFoundException;
import net.javaguides.emsbackend.mapper.DepartmentMapper;
import net.javaguides.emsbackend.repository.DepartmentRepostitory;
import net.javaguides.emsbackend.service.DepartmentService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class DepartmentServiceImpl implements DepartmentService {
       private DepartmentRepostitory departmentRepostitory;
    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {

        Department department= DepartmentMapper.maptoDepartment(departmentDto);
        Department savedDepartment =departmentRepostitory.save(department);

        return DepartmentMapper.maptoDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long departmentId) {

      Department department =  departmentRepostitory.findById(departmentId).orElseThrow(
                ()-> new ResourceNotFoundException("Department is not exists with a given id :" + departmentId)
        );
        return DepartmentMapper.maptoDepartmentDto(department);
    }

    @Override
    public List<DepartmentDto> getAllDepartments() {

        List<Department> departments=departmentRepostitory.findAll();
        return departments.stream().map((department -> DepartmentMapper.maptoDepartmentDto(department)))
                .collect(Collectors.toList());
    }

    @Override
    public DepartmentDto updateDepartment(Long departmentId, DepartmentDto updatedDepartment) {
       Department department= departmentRepostitory.findById(departmentId).orElseThrow(
                ()-> new ResourceNotFoundException("Department is not exists with a given id : " + departmentId)
        );
       department.setDepartmentName(updatedDepartment.getDepartmentName());
       department.setDepartmentDescription(updatedDepartment.getDepartmentDescription());

      Department savedDepartment= departmentRepostitory.save(department);

        return DepartmentMapper.maptoDepartmentDto(savedDepartment);
    }

    @Override
    public void deleteDepartment(Long departmentId) {
        departmentRepostitory.findById(departmentId).orElseThrow(()->
                new ResourceNotFoundException("Department is not exists with a given id : " +departmentId)
        );

        departmentRepostitory.deleteById(departmentId);
    }
}
