import React from "react";

export const Butacas = () => {
    const container = document.querySelector(".container");
    const seats = document.querySelectorAll(".row .seat:not(.occupied)");
    const count = document.getElementById("count");
    const total = document.getElementById("total");
    const movieSelect = document.getElementById("movie");

    populateUI();

    let ticketPrice = +movieSelect.value;

    setMovieData = (movieIndex, moviePrice) => {
        localStorage.setItem("selectedMovieIndex", movieIndex);
        localStorage.setItem("selectedMoviePrice", moviePrice);
    };

    updateSelectedCount = () => {
        const selectedSeats = document.querySelectorAll(".row .seat.selected");

        const seatsIndex = [...selectedSeats].map((seat) => {
            return [...seats].indexOf(seat);
        });

        localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

        const selectedSeatsCount = selectedSeats.length;

        count.innerText = selectedSeatsCount;
        total.innerText = selectedSeatsCount * ticketPrice;
    };

    function populateUI() {
        const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

        if (selectedSeats !== null && selectedSeats.length > 0) {
            seats.forEach((seat, index) => {
                if (selectedSeats.indexOf(index) > -1) {
                    seat.classList.add("selected");
                }
            });
        }

        const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

        if (selectedMovieIndex !== null) {
            movieSelect.selectedIndex = selectedMovieIndex;
        }
    }

    movieSelect.addEventListener("change", (e) => {
        ticketPrice = +e.target.value;
        setMovieData(e.target.selectedIndex, e.target.value);
        updateSelectedCount();
    });

    container.addEventListener("click", (e) => {
        if (
            e.target.classList.contains("seat") &&
            !e.target.classList.contains("occupied")
        ) {
            e.target.classList.toggle("selected");

            updateSelectedCount();
        }
    });

    updateSelectedCount();

    return (
        <div>
            <div class="move-container">
                <label>Pick a movie:</label>
                <select id="movie">
                    <option value="16">Avengers: End Game ($16)</option>
                    <option value="20">Dark Knight ($20)</option>
                    <option value="10">
                        Harry Potter and the Goblet of Fire ($10)
                    </option>
                    <option value="12">Transformers ($12)</option>
                </select>
            </div>

            <ul class="showcase">
                <li>
                    <div class="seat"></div>
                    <small>Available</small>
                </li>
                <li>
                    <div class="seat selected"></div>
                    <small>Selected</small>
                </li>
                <li>
                    <div class="seat occupied"></div>
                    <small>Occupied</small>
                </li>
            </ul>

            <div class="container">
                <div class="screen"></div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat occupied"></div>
                </div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                </div>
                <div class="row">
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat"></div>
                    <div class="seat occupied"></div>
                    <div class="seat occupied"></div>
                    <div class="seat"></div>
                </div>
            </div>

            <p class="text">
                You have selected <span id="count">0</span> seats for the price
                of $<span id="total">0</span>!
            </p>
        </div>
    );
};
