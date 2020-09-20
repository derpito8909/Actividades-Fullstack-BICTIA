/*En este script se obtiene la lista guardada en el local storage y se muestra en la tabla de la pagina */
const tableTeams = document.getElementById('tableTeam');
let savedTeams;
/* en este metodo obtiene la lista en guardada en el local storage */
const getLocalstorageItems = () => {
    let listStorage = JSON.parse(localStorage.getItem('listTeams'));
    return listStorage;
}
savedTeams = getLocalstorageItems();


/* en este metodo se obtiene la lista en guardada en el local storage y se muestra en la tabla de la pagina*/
const setListTeamTable = (savedTeam) => {
    for (let i = 0; i < savedTeam.length; i++) {
        tableTeams.innerHTML += `
            <tr>
                <th>${i+1}</th>
                <td>${savedTeam[i].equipo}</td>
                <td>${savedTeam[i].lugar}</td>
                <td>${savedTeam[i].stadium}</td>
            <tr>
        `

    }
}
setListTeamTable(savedTeams);

/* este metodo limpia el contenido del local storage y el tambien el contenido de la tabla */
function clean(e) {
    localStorage.clear();
    tableTeams.innerHTML = '';
}