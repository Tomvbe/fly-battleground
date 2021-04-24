**Bugs/Todo**
- Game breaks if window changes size
- Currently directions have an array of neighbours which are selected randomly. 
  This means that higher rotations are even less likely as it can rotate back.
  We can solve this with using two fields: clockwise and counter-clockwise neighbours.
