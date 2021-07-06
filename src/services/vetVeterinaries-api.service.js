import http from "@/services/common/http.common";

class VetVeterinariesApiService{

    getVetVeterinariesByVetId(id){
        return http.get(`/vets/${id}/vetveterinaries`);
    }


}

export default new VetVeterinariesApiService();