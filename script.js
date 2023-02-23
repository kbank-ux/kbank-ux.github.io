$(document).ready(function () {
  let tickets = [];
  let tickets_d1 = [];
  let tickets_d2 = [];
  let tickets_d3 = [];
  let tickets_d4 = [];
  let tickets_d5 = [];
  let history = [];
  $.getJSON("tickets.json", function (data) {
    tickets = data.ticket_all;
    tickets_d1 = data.ticket_day1;
    tickets_d2 = data.ticket_day2;
    tickets_d3 = data.ticket_day3;
    tickets_d4 = data.ticket_day4;
    tickets_d5 = data.ticket_day5;
    displayTicketList();
  });
  let bulkcount = 1;

  function displayTicketList() {
    $("[id^='ticket-list'] ul").empty();
    tickets.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
    tickets_d1.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list-1 ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
    tickets_d2.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list-2 ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
    tickets_d3.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list-3 ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
    tickets_d4.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list-4 ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
    tickets_d5.forEach(function (ticket) {
      if (ticket[1] > 0) {
        for (let i = 0; i < ticket[1]; i++) {
          $("#ticket-list-5 ul").append("<li>" + ticket[0] + "</li>");
        }
      }
    });
  }

  $(".draw-btn").click(function () {
    var callerName = $(this).attr("id");
    let available_tickets = tickets.filter((ticket) => ticket[1] > 0);
    if (callerName === "draw-btn1") {
      available_tickets = tickets_d1.filter((ticket) => ticket[1] > 0);
    } else if (callerName === "draw-btn2") {
      available_tickets = tickets_d2.filter((ticket) => ticket[1] > 0);
    } else if (callerName === "draw-btn3") {
      available_tickets = tickets_d3.filter((ticket) => ticket[1] > 0);
    } else if (callerName === "draw-btn4") {
      available_tickets = tickets_d4.filter((ticket) => ticket[1] > 0);
    } else if (callerName === "draw-btn5") {
      available_tickets = tickets_d5.filter((ticket) => ticket[1] > 0);
    }

    if (callerName === "draw-btn0a") {
      bulkcount = 70;
    } else if (callerName === "draw-btn0b") {
      bulkcount = 20;
    } else {
      bulkcount = 1;
    }

    if (available_tickets.length > 0) {
      // Calculate the total number of available tickets
      let total_available_tickets = available_tickets.reduce(
        (acc, cur) => acc + cur[1],
        0
      );
      // Spin the slot machine
      let spin_count = 20; // The number of times to spin the slot machine
      let spin_interval = 30; // The interval between each spin in milliseconds
      let ticket_probabilities = available_tickets.map(
        (ticket) => ticket[1] / total_available_tickets
      );
      let current_spin_count = 0;
      let slot_machine = setInterval(function () {
        let random_prob = Math.random();
        let selected_index = 0;
        let cumulative_prob = ticket_probabilities[0];
        while (
          random_prob > cumulative_prob &&
          selected_index < ticket_probabilities.length - 1
        ) {
          selected_index++;
          cumulative_prob += ticket_probabilities[selected_index];
        }
        let selected_ticket = available_tickets[selected_index];

        $(".request-ticket").text(selected_ticket[0]);
        current_spin_count++;
        $(".request-ticket").animate(
          {
            marginTop: "50px"
          },
          spin_interval,
          function () {
            $(this).text(selected_ticket[0]).css("marginTop", "-50px").animate(
              {
                marginTop: "0px"
              },
              spin_interval
            );
          }
        );

        if (current_spin_count === spin_count) {
          clearInterval(slot_machine);
          let dup_check = [];
          for (i = 1; i <= bulkcount; i++) {
            let random_prob = Math.random();
            let selected_index = 0;
            let cumulative_prob = ticket_probabilities[0];
            if (i > ticket_probabilities.length) break;

            while (
              random_prob > cumulative_prob &&
              selected_index < ticket_probabilities.length - 1
            ) {
              selected_index++;
              cumulative_prob += ticket_probabilities[selected_index];
            }
            let selected_ticket = available_tickets[selected_index];
            let dup = 0;
            for (j = 0; j <= i - 1; j++) {
              if (dup_check[j] === selected_ticket[0]) {
                dup = 1;
                break;
              }
            }
            if (dup === 1) {
              i--;
              continue;
            } else {
              dup_check[i] = selected_ticket[0];
            }

            $(".request-ticket").text(selected_ticket[0]);
            current_spin_count++;
            $(".request-ticket").animate(
              {
                marginTop: "0px"
              },
              0,
              function () {
                $(this)
                  .text(selected_ticket[0])
                  .css("marginTop", "-0px")
                  .animate(
                    {
                      marginTop: "0px"
                    },
                    0
                  );
              }
            );

            setTimeout(function () {
              history.push([callerName, selected_ticket[0]]);
              if (callerName === "draw-btn1") {
                tickets_d1 = tickets_d1.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              } else if (callerName === "draw-btn2") {
                tickets_d2 = tickets_d2.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              } else if (callerName === "draw-btn3") {
                tickets_d3 = tickets_d3.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              } else if (callerName === "draw-btn4") {
                tickets_d4 = tickets_d4.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              } else if (callerName === "draw-btn5") {
                tickets_d5 = tickets_d5.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              } else {
                tickets = tickets.map((ticket) => {
                  if (ticket[0] === selected_ticket[0]) {
                    ticket[1] = 0;
                  }
                  return ticket;
                });
              }
              $("[id^='history-draw-btn'] ol").empty();
              $.each(history, function (i, number) {
                $("#history-" + number[0] + " ol").append(
                  "<li>" + number[1] + "</li>"
                );
              });
              displayTicketList();
            }, 300);
          }
        }
      }, spin_interval * 1.5);
    } else {
      $(".request-ticket").text("Empty");
    }
  });
});
