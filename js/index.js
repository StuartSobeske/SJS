function loadHome(){
    changeView([{'page':'pages/menu-bar.html'},{'page':'pages/home.html', 'targetId':'menu-bar-content'}]);
}

async function changeViewO(page, targetId = 'content'){
    try {
        const response = await fetch(page);
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    }
    catch(error) {
        console.error('Error loading page: ', error);
    }
}

async function changeView(targets, targetId){
    try {
        if(Array.isArray(targets) === false){
            targets = [{page:targets, targetId:targetId}];
        }

        for (const e of targets) {
            const response = await fetch(e.page);
            const html = await response.text();
            const targetId = e.targetId ?? 'content';
            document.getElementById(targetId).innerHTML = html;
        }
    }
    catch(error) {
        console.error('Error loading page: ', error);
    }
}