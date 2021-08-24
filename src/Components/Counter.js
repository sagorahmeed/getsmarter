
import $ from 'jquery';
import emoji from "../emoji_svg/emoji.svg";
import emojiList from "../emoji_svg/list.svg";
import emojiMedal from "../emoji_svg/medal.svg";
import emojiIncrease from "../emoji_svg/increase.svg";
import { Grid } from '@material-ui/core';

var counted = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.count').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

});

const Counter = () => {
    return (
        <div>
             <Grid container id="counter" className='count_heading'>
                <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
                    <div className='count_details'>
                        <div>
                            <img className='count_emoji_svg' src={emoji}/>
                        </div>
                        <span class="count percent" data-count="1200">
                            0
                        </span>
                        <div className='count_title'>Happy Customer</div>
                    </div>
                </Grid>
                <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className='count_details'>
                    <div>
                            <img className='count_emoji_svg' src={emojiList}/>
                        </div>
                        <span class="count percent" data-count="1300">
                            0
                        </span>
                        <div className='count_title'>Complete Projects</div>
                   </div>
                </Grid>
                <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className='count_details'>
                        <div>
                            <img className='count_emoji_svg' src={emojiMedal}/>
                        </div>
                        <span class="count percent" data-count="345">
                            0
                        </span>
                        <div className='count_title'>Awards Won</div>
                    </div>
                </Grid>
                <Grid item  xl={3} lg={3} md={4} sm={6} xs={12}>
                <div className='count_details'>
                        <div>
                            <img className='count_emoji_svg' src={emojiIncrease}/>
                        </div>
                        <span class="count percent" data-count="10">
                            0
                        </span>
                        <div className='count_title'>Year Experience</div>
                    </div>
                </Grid>
            </Grid>            
        </div>
    )
}

export default Counter
