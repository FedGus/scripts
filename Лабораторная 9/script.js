function getTicket(id) {
    return new Promise((resolve, reject) => {
        document.write('Начали получать билет <br>');
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({id, name: "Федор"});
            } else {
                reject('Данные билета не получены');
            }
        }, 1000)
    })
}


function getBook(ticket_id) {
    return new Promise((resolve, reject) => {
        document.write('Начали получать бронирование гостиницы <br>');
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve({id_book: 5, ticket_id: ticket_id, visa_id: 31});
            } else {
                reject('Данные брони не получены');
            }
        }, 1000)
    })
}

function getVisa(visa_id) {
        return new Promise((resolve, reject) => {
            document.write('Начали получать данные визы <br>');
            setTimeout(() => {
                let success = true;
                if (success) {
                    resolve({id: visa_id, country: "FIN"});
                } else {
                    reject('Данные визы не получены');
                }
            }, 1000)
        })
    }

(async function () {
    try {
        let ticket = await getTicket(11);
        let book = await getBook(await ticket.id);
        let visa = await  getVisa(await book.visa_id);
        let all = await Promise.all([ticket, book, visa]);
        const obj = all.reduce((res, el) => ({...res, ...el}), {});
        document.write("Вывод всех данных: ");
        console.log(obj);
         
        function alertObj(obj) { 
            var str = ""; 
            for(k in obj) { 
                str += k+": "+ obj[k]+" <br>"; 
            } 
            document.write(str);
        }
        alertObj(obj);

    } catch(err) {
        console.error(err)
    } finally {

    }
})()











