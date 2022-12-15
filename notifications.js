
// function to handle notification responses
const handleApprove = (approved,id) => {

    // object to pass to server
    console.log('approved in js: ' + approved)
    const notifDetails = {
        'id': id,
        'approved': approved

    };


    // AJAX post request 
    $.post('/handle_notif_response',notifDetails,(res) => {
        alert(res)
    }); 

    $(`#${id}`).hide();

  
  
};
// gives user info about the event request
function showRequested(id) {


    $.get('/event_req_notif.json',{ 'id':id }, (res) => {
        // calendar.addevent
        console.log(id);

        
        

    });
};

//list all notifications
$.get('/get_notifications.json',(response) => {


    jsonSize = Object.keys(response).length;

    for (const notification of response) {
       // console.log('3')
        const id = notification.id;
        let type = notification.type;
        const from = notification.from
        let times = ""
        console.log(id);

        // construct start time - end time string if its an event request
        if(type == 'event request'){
            type = notification.event_type + " request"
            times = notification.start + notification.end
        };
    
        if(notification.event_type == 'party'){
            party_id = notification.event_id
            $('ul.notifications').append(`
                <li class=notifications id=${id}>
                    <span class=notif-msg>${type} from ${from} </span>
                    <span class="notif-btns">
                        <button
                            type="button"
                            class="approved btn btn-primary btn-sm"
                            id="approve-${id}"
                            onclick="handleApprove(${true},${id})"
                            onmouseover="showRequested(${id})"
                        >
                            Approve
                        </button>
                        <button 
                            type="button" 
                            class="approved btn-secondary btn-sm"" 
                            id="deny-${id}"
                            onclick="handleApprove(${false},${id})"
                            onmouseover="showRequested(${id})"
                        >
                            Deny
                        </button>
                        <a href="/party/${party_id}" id="view-party"><button 
                            type="button" 
                            class="btn btn-secondary btn-sm view-party" 
                        >
                            View Page
                        </button></a>
                    </span>
                </li>`);
            
    }else{
         $('ul.notifications').append(`
                <li class=notifications id=${id}>
                    ${type} from ${from}
                    <button
                        type="button"
                        class="approved btn btn-primary btn-sm"
                        id="approve-${id}"
                        onclick="handleApprove(${true},${id})"
                        onmouseover="showRequested(${id})"
                    >
                        Approve
                    </button>
                    <button 
                        type="button" 
                        class="approved btn btn-secondary btn-sm" 
                        id="deny-${id}"
                        onclick="handleApprove(${false},${id})"
                        onmouseover="showRequested(${id})"
                    >
                        Deny
                    </button>
                </li>`);

        }
    }
   
});