// src/services/orderService.js

import api from './api';

const orderService = {
  getAll: () => api.get('/orders'),
  create: (data) => api.post('/orders', data),
  update: (id, data) => api.put(`/orders/${id}`, data),
};

export default orderService;
