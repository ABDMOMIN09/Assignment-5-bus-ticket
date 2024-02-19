function selectTicket(ticket){
    if (ticket.classList.contains("selected")) {
        return;   }
    let allTicketCount = parseInt(document.getElementById("allTicket").innerText);
    let selectedTicketCount = parseInt(document.getElementById("selectedTicket").innerText);
    let priceOfTicket = parseInt(document.getElementById("priceOfTicket").innerText);

    ticket.classList.add("selected");
    let ticketName = ticket.innerText;

    selectedTicketCount++;
    priceOfTicket += 550;
    allTicketCount--;
    document.getElementById("allTicket").innerText = allTicketCount;

    document.getElementById("selectedTicket").innerText = selectedTicketCount;
    document.getElementById("priceOfTicket").innerText = priceOfTicket;

// ticket.removeEventListener("click", selectTicket);
const ticSelected = document.getElementById("ticSelected");
    ticSelected.innerHTML += `
      <tr>
        <td>${ticketName}</td>
        <td>Economy</td>
        <td>500</td>
      </tr>
    `;


    document.getElementById("nextButton").disabled = false;


}
function resetSelections(){
    document.location.reload()
}