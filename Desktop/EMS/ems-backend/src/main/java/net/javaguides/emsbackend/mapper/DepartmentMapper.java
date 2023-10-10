package net.javaguides.emsbackend.mapper;


import net.javaguides.emsbackend.dto.DepartmentDto;
import net.javaguides.emsbackend.entity.Department;

public class DepartmentMapper {

    //convert department jpa enity into department dto
    public static DepartmentDto maptoDepartmentDto(Department department){

        return new DepartmentDto(

                department.getId(),
                department.getDepartmentName(),
                department.getDepartmentDescription()
        );
    }

    //convert department dto into department jpa entity
    public static Department maptoDepartment(DepartmentDto departmentDto){

        return new Department(

                departmentDto.getId(),
                departmentDto.getDepartmentName(),
                departmentDto.getDepartmentDescription()
        );
    }

}
