var levelTime = 10;
var startWidth = 4;
var level = 13;
var width = startWidth;
var time = levelTime;

$timer = $('.timer');
$level = $('.level');
$field = $('.field');

function field(level)
{
  var width = startWidth + level;
  var total = width * width;
  var nines = [];
  var position = Math.ceil((Math.random() * total -1 ));
  for (var i=0;i<total; i++)
  {
    if (i == position)
    {
      nines.push('<span class="eight">8</span>');
    }
    else
    {
      nines.push('9');
    }

    if(i%width == width-1)
    {
       nines.push('<br/>');
    }
  }
  time = levelTime;

  if (level > 20)
  {
    $field.addClass('smaller');
  }
  else if (level > 13)
  {
    $field.addClass('small');
  }
  else
  {
    $field.removeClass('small smaller');
  }

  $level.html(level)
  $('.eight').removeClass('show');
  $('.field')
    .html(nines.join(''));
}

setInterval(updateTimer, 1000);
function updateTimer()
{
  time --;
  if (time < 0)
  {
    lose();
  }
  $timer.html(time);
}

function win()
{
  level++;
  field(level);
  time += levelTime;
  updateTimer();
}

function lose()
{
  level = 0;
  time = 0;
  $('.eight').addClass('show');
  $('.actions').fadeIn();
}

function restart()
{
  field(1)
  $('.actions').fadeOut();
}


field(level);
$(document)
  .on('click', '.eight', win)
  .on('click', '.replay', restart);

