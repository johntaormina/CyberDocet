
// Takes course data and gives back progress of completion
// in percentage

export const coursesProgress = (courseData) => {
    let total_sections = 0;
    let sections_completed = 0;
    let progress_percentage = undefined;
    
    if(courseData){
        const introduction = courseData.Course1;
        console.log(courseData);
        Object.keys(introduction).forEach(key => {
            if(key !== 'title' && key !== 'urlID'){
                total_sections++;
                if(introduction[key].completed){
                    sections_completed++;
                }
            }
        })

        const phishing = courseData.Course2;

        Object.keys(phishing).forEach(key => {
            if(key !== 'title' && key !== 'urlID'){
                total_sections++;
                if(phishing[key].completed){
                    sections_completed++;
                }
            }
        })

        const internet = courseData.Course3;

        Object.keys(internet).forEach(key => {
            if(key !== 'title' && key !== 'urlID'){
                total_sections++;
                if(internet[key].completed){
                    sections_completed++;
                }
            }
        })


       progress_percentage = 
       Math.round((sections_completed/total_sections)*100);
       
    }
    return progress_percentage;
}


