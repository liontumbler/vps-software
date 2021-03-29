<?php
  for ($i=0; $i < 6; $i++) { 
    $outp .= '{"Name":"edwin'.$i.'",';
    $outp .= '"City":"nada'.$i.'",';
    $outp .= '"Country":"cualquiera'.$i.'"}';

    if ($i < 5) {
      $outp .= ',';
    }
  }

  $outp ='{"records":['.$outp.']}';
  
  echo $outp;
?>