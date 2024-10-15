$(document).ready(function() {

    var table = $('#example').DataTable({

        buttons:['copy', 'csv', 'excel', 'pdf', 'print', 'add', 'remove']
    });

    table.buttons().container()
    .appendTo('#example_wrapper .col-md-6:eq(0)');
});



 // Simulated file paths (these can be dynamically generated or fetched from the server)
//  const files = {
//     jobFile: './fILe.pdf',
//     joiningFile: './all joning frome/2515012421-rasid.pdf',
//     iqamaFile: './Iqama_4012/410336.pdf',
//     passportFile: './PASSPROT_4012/410336.pdf',
//     othersFile: './fILe.pdf',
//     aidFile: './airprot id/410336.pdf'
// };

// Function to check if a file exists (you can use fetch API or server-side logic here)
// function checkFileExists(filePath) {
//     // Simulate checking if file exists (here we assume all files exist for demo purposes)
//     return filePath !== 'N/A'; // Or some real condition to check
// }

// Enable or disable buttons based on file existence
// document.getElementById('job-btn').disabled = !checkFileExists(files.jobFile);
// document.getElementById('joining-btn').disabled = !checkFileExists(files.joiningFile);
// document.getElementById('iqama-btn').disabled = !checkFileExists(files.iqamaFile);
// document.getElementById('passport-btn').disabled = !checkFileExists(files.passportFile);
// document.getElementById('others-btn').disabled = !checkFileExists(files.othersFile);
// document.getElementById('aid-btn').disabled = !checkFileExists(files.aidFile);
    


