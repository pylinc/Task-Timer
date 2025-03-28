let timers = JSON.parse(localStorage.getItem("timers")) || [];
        let activeTimer = null;

        function saveTimers() {
            localStorage.setItem("timers", JSON.stringify(timers));
        }

        function addTimer() {
            const name = document.getElementById("taskName").value;
            if (!name) return alert("Enter a task name");
            
            const timer = {
                id: Date.now(),
                name: name,
                time: 0,
                interval: null
            };
            timers.push(timer);
            saveTimers();
            renderTimers();
        }

        function renderTimers() {
            const timersDiv = document.getElementById("timers");
            timersDiv.innerHTML = "";
            timers.forEach(timer => {
                const timerElement = document.createElement("div");
                timerElement.className = "timer" + (timer.interval ? " active" : "");
                timerElement.innerHTML = `
                    <span>${timer.name} - <span id="time-${timer.id}">${formatTime(timer.time)}</span></span>
                    <button class="start" onclick="startTimer(${timer.id})">▶</button>
                    <button class="stop" onclick="stopTimer(${timer.id})">⏸</button>
                    <button class="reset" onclick="resetTimer(${timer.id})">🔄</button>
                    <button class="delete" onclick="deleteTimer(${timer.id})">🗑</button>
                `;
                timersDiv.appendChild(timerElement);
            });
        }

        function startTimer(id) {
            if (activeTimer) stopTimer(activeTimer);
            const timer = timers.find(t => t.id === id);
            timer.interval = setInterval(() => {
                timer.time++;
                document.getElementById(`time-${timer.id}`).innerText = formatTime(timer.time);
                saveTimers();
            }, 1000);
            activeTimer = id;
            renderTimers();
        }

        function stopTimer(id) {
            const timer = timers.find(t => t.id === id);
            clearInterval(timer.interval);
            timer.interval = null;
            activeTimer = null;
            saveTimers();
            renderTimers();
        }

        function resetTimer(id) {
            const timer = timers.find(t => t.id === id);
            timer.time = 0;
            document.getElementById(`time-${timer.id}`).innerText = formatTime(timer.time);
            saveTimers();
            renderTimers();
        }

        function deleteTimer(id) {
            timers = timers.filter(t => t.id !== id);
            if (activeTimer === id) activeTimer = null;
            saveTimers();
            renderTimers();
        }

        function formatTime(seconds) {
            let h = Math.floor(seconds / 3600);
            let m = Math.floor((seconds % 3600) / 60);
            let s = seconds % 60;
            return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
        }

        // Resume running timer on reload
        timers.forEach(timer => {
            if (timer.interval) {
                startTimer(timer.id);
            }
        });
        renderTimers();