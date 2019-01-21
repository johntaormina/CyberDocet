
// Takes course data and gives back progress of completion
// in percentage

export const coursesProgress = (courseData) => {
    let total_sections = 0;
    let sections_completed = 0;
    let progress_percentage = undefined;

    if(courseData){
        const introduction = courseData.Introduction;

        Object.keys(introduction).forEach(key => {
            if(key !== 'title' && key !== 'urlID'){
                total_sections++;
                if(introduction[key].completed){
                    sections_completed++;
                }
            }
        })

        const phishing = courseData.Phishing;

        Object.keys(phishing).forEach(key => {
            if(key !== 'title' && key !== 'urlID'){
                total_sections++;
                if(phishing[key].completed){
                    sections_completed++;
                }
            }
        })
       progress_percentage = 
       Math.round((sections_completed/total_sections)*100);
       
    }
    return progress_percentage;
}


