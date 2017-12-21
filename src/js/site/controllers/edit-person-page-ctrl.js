export default function($scope, $stateParams){

    // get the selected person
    for (var i=0, l=$scope.people.length; i<l; i++){
        if ($stateParams.personId == $scope.people[i].id) {
            $scope.person = $scope.people[i];
            break;
        }
    };

    /*
    https://www.labnol.org/software/add-speech-recognition-to-website/19989/
     */
    $scope.startDictation = function() {

        if (window.hasOwnProperty('webkitSpeechRecognition')) {

            var recognition = new webkitSpeechRecognition();

            recognition.continuous = false;
            recognition.interimResults = false;

            recognition.lang = "en-US";
            recognition.start();

            recognition.onresult = function(e) {
                document.getElementById('personName').value = e.results[0][0].transcript;
                recognition.stop();
                document.getElementById('labnol').submit();
            };

            recognition.onerror = function(e) {
                recognition.stop();
            }

        }
    }
}