package com.example.edugateway_app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.edugateway_app.entity.Payment;
import com.example.edugateway_app.repository.PaymentRepo;
import java.util.List;
import java.util.Optional;
@Service
public class PaymentService {
    
    @Autowired
    private PaymentRepo paymentRepository;

    
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    
    public Optional<Payment> getPaymentById(Long paymentId) {
        return paymentRepository.findById(paymentId);
    }

  
    public Payment createPayment(Payment payment) {
        return paymentRepository.save(payment);
    }

    
    public Payment updatePayment(Long paymentId, Payment payment) {
        if (paymentRepository.existsById(paymentId)) {
            payment.setPaymentId(paymentId);
            return paymentRepository.save(payment);
        } else {
            // Handle not found scenario
            return null;
        }
    }

    
    public boolean deletePayment(Long paymentId) {
        paymentRepository.deleteById(paymentId);
        return true;
    }
}
