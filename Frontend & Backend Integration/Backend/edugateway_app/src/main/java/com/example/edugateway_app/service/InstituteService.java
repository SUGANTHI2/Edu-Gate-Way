package com.example.edugateway_app.service;

import com.example.edugateway_app.entity.Institute;
import com.example.edugateway_app.repository.InstituteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InstituteService {
    @Autowired
    private InstituteRepo instituteRepository;

    public List<Institute> getAllInstitutes() {
        return instituteRepository.findAll();
    }

    public Institute getInstituteById(Long instituteId) {
        return instituteRepository.findById(instituteId).orElse(null);
    }

    public Institute createInstitute(Institute institute) {
        return instituteRepository.save(institute);
    }

    public Institute updateInstitute(Long instituteId, Institute updatedInstitute) {
        if (instituteRepository.existsById(instituteId)) {
            updatedInstitute.setInstituteId(instituteId);
            return instituteRepository.save(updatedInstitute);
        } else {
            return null;
        }
    }

    public void deleteInstitute(Long instituteId) {
        instituteRepository.deleteById(instituteId);
    }
}
