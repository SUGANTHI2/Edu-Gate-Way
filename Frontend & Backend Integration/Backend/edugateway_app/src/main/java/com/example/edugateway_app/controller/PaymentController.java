package com.example.edugateway_app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.edugateway_app.entity.Admission;
import com.example.edugateway_app.entity.Payment;
import com.example.edugateway_app.service.AdmissionService;
import com.example.edugateway_app.service.PaymentService;

import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/payments")
public class PaymentController {
     @Autowired
    private PaymentService paymentService;

    @Autowired
    private AdmissionService admissionService;

    @GetMapping("/")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }

    @GetMapping("/{paymentId}")
    public Optional<Payment> getPaymentById(@PathVariable Long paymentId) {
        return paymentService.getPaymentById(paymentId);
    }
    @PostMapping
    public Payment createPayment(@RequestParam(value = "admissionId", required = false) Long admissionId,
                                     @RequestBody Payment payment) {
        if (admissionId != null) {
            Admission admission = admissionService.getAdmissionById(admissionId);
            if (admission != null) {
                payment.setAdmission(admission);
            } else {
                // Handle case where studentId does not correspond to any student
                // You can throw an exception or return an appropriate response
            }
        }

        return paymentService.createPayment(payment);
}

  

    @PutMapping("/{paymentId}")
    public Payment updatePayment(@PathVariable Long paymentId, @RequestBody Payment payment) {
        return paymentService.updatePayment(paymentId, payment);
    }

    @DeleteMapping("/{paymentId}")
    public boolean deletePayment(@PathVariable Long paymentId) {
        paymentService.deletePayment(paymentId);
        return true;
    }
}
