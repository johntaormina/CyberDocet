
// Takes course data and gives back progress of completion
// in percentage

export const courseProgress = (sections) => {
    let total_sections = 0;
    let sections_completed = 0;
    let progress_percentage = undefined;

    if(sections){
        sections.forEach(element => {
            total_sections++;
            if(element.completed){
                sections_completed++;
            }
        })

       progress_percentage = 
       Math.round((sections_completed/total_sections)*100);
       
    }
    
    return progress_percentage;
}


