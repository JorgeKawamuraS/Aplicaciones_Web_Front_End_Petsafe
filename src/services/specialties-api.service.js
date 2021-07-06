import http from './common/http.common';

class SpecialtiesApiService{

    getAll(){
        return http.get('/specialties');
    }

    getById(id){
        return http.get(`/specialties/${id}`);
    }
    create(data){
        return http.post(`/specialties`,data);
    }
    delete(id){
        return http.delete(`/specialties/${id}`);
    }
    update(id,data){
        return http.put(`/specialties/${id}`,data);
    }
}

export default new SpecialtiesApiService();