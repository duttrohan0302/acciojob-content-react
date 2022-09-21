const url = "https://course-api.com/react-tours-project";

const fetchTours = async () => {

    try{
        const response = await fetch(url);
        const toursFetched = await response.json();

        return toursFetched;
    }catch(error){
        return error;
    }
}

export default fetchTours;