<html>
<body>

<form action="welcome.php" method="post">
Name: <input type="text" name="name"><br>
E-mail: <input type="text" name="email"><br>
<input type="submit">
</form>

</body>
</html>

<!-- Button trigger modal
<button class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Launch demo modal
</button> -->


<a class="sign_new" href="#sign_up"></a>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="myModalLabel">Patient Admittance</h4>
      </div>
      <div class="modal-body">
        <html>
<body>

<form action="welcome_get.php" method="get">
Bed<input type="text" name="bedID"><br>
Room<input type="text" name="roomID"><br>
Ward<input type="text" name="wardID"><br>
Availability<input type="text" name="availability"><br>
PatientId<input type="text" ><br>
Patient First Name<input type="text"><br>
Patient Last Name<input type="text"><br>

</form>

</body>
</html>
		
		
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Update</button>
      </div>
    </div>
  </div>
</div>