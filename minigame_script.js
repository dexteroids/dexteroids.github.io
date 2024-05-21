

const randomNumber = Math.floor(Math.random() * 10) + 1;
        let attempts = 0;
        
        function checkGuess() {
          const guess = parseInt(document.getElementById('guess').value);
          const message = document.getElementById('message');
        
          if (isNaN(guess) || guess < 1 || guess > 10) {
            message.textContent = 'Masukkan angka antara 1 sampai 10!';
            return;
          }
        
          attempts++;
        
          if (guess === randomNumber) {
            message.textContent = `Selamat! Anda menebak dengan benar dalam ${attempts} percobaan.`;
            resetGame();
          } else if (guess < randomNumber) {
            message.textContent = 'Tebakan Anda terlalu rendah, coba lagi.';
          } else {
            message.textContent = 'Tebakan Anda terlalu tinggi, coba lagi.';
          }
        }

        function resetGame() {
             // Reset nilai acak dan percobaan
            randomNumber = Math.floor(Math.random() * 10) + 1;
            attempts = 0;
             // Reset input dan pesan
            document.getElementById('guess').value = '';
            document.getElementById('message').textContent = '';
        }
