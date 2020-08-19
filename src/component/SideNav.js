import React, {Component} from 'react';

class SideNav extends Component {
  render() {
    return (
        <aside class="side-bar col-4 col-sm-4 col-md-3">
        <ul>
            <li class="side-nav-item"><i class="fas fa-th-large"></i>Dashboard</li>
            <li class="side-nav-item"><i class="fas fa-object-group"></i>Subjects<i
                    class="fas fa-chevron-right sm"></i></li>
            <li class="side-nav-item"><i class="fas fa-users"></i>Network</li>
            <li class="side-nav-item"><i class="fas fa-folder"></i>Resources<i class="fas fa-chevron-right sm"></i>
            </li>
        </ul>
        <div class="btn-wrap">
            <button class="aside-btn"><i class="fas fa-object-group"></i><a href="#"> Create Subject</a></button>
            <button class="aside-btn"> <i class="fas fa-caret-square-up"></i><a href="#"> Upload
                    Resources</a></button>
        </div>
        <div class="hashtags">
            <h4>Hashtags</h4>
            <a href="#">#mathematics</a>
            <a href="#">#history</a>
            <a href="#">#computer</a>
            <a href="#">#english</a>
            <a href="#">#geography</a>
            <a href="#">#painting</a>
        </div>

        <div class="recent_used">
            <h4>Recent used hashtags</h4>

            <div class="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam deserunt,
                adipisci vitae
                nulla ipsa delectus numquam aliquam voluptatem totam laudantium quidem consequatur itaque ad vel
                iure quam reprehenderit aperiam!
                <div class="time">
                    12mins ago
                </div>
            </div>
            <div class="para1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia veniam deserunt,
                adipisci vitae
                nulla ipsa delectus numquam aliquam voluptatem totam laudantium quidem consequatur itaque ad vel
                iure quam reprehenderit aperiam!
                <div class="time">
                    12mins ago
                </div>
            </div>
        </div>
    </aside>
    

    );
  }
}

export default SideNav;
