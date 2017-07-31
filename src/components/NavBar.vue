<template lang="html">
<div class="navbar navbar-inverse navbar-fixed-top bg-indigo">
  <div class="navbar-header">
    <a class="navbar-brand" href=".">
      <img  class="pull-left" src="/static/dashboard/app/img/logo.png" alt="">
      <span class="pull-left" style="margin-left: 5px;">
        POSITIVA<sup>FX</sup>
      </span>
    </a>

    <ul class="nav navbar-nav pull-right visible-xs-block">
      <li><a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a></li>
      <li><a class="sidebar-mobile-main-toggle"><i class="icon-paragraph-justify3"></i></a></li>
      <li><a class="sidebar-mobile-detached-toggle"><i class="icon-grid7"></i></a></li>
    </ul>
  </div>

  <div class="navbar-collapse collapse" id="navbar-mobile">
    <ul class="nav navbar-nav">
      <li><a class="sidebar-control sidebar-main-toggle hidden-xs"><i class="icon-paragraph-justify3"></i></a></li>
    </ul>

    <ul class="nav navbar-nav navbar-right">
      <li>
        <a title="Deposits Waiting" href="/deposit_request/waiting">
          <i class="icon-coins"></i>
          0
        </a>
      </li>
      <li>
        <a title="Withdrawals Waiting" href="/withdrawal_request/waiting">
          <i class="icon-credit-card"></i>
          0
        </a>
      </li>
      <li>
        <a title="Clients (Total/Online/Pending)" href="/clients/pending">
          <i class="icon-users"></i>
          <span class="stat-clients-total">10</span> /
          <span class="stat-clients-online">0</span> /
          <span class="stat-clients-pending">0</span>
        </a>
      </li>
      <li>
        <a title="Profile Change Requests" href="/clients/change_requests">
          <i class="icon-profile"></i>
          0
        </a>
      </li>

      <li>
        <a title="Pending Documents" href="/clients/documents_pending">
          <i class="icon-file-text2"></i>
          0
        </a>
      </li>

      <li class="dropdown language-switch">
        <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
          <img src="/static/limitless/assets/images/flags/gb.png" class="position-left" alt="">
          English
          <span class="caret"></span>
        </a>
        <ul class="dropdown-menu">
          <li><a class="english"><img src="/static/limitless/assets/images/flags/gb.png" alt=""> English</a></li>
          <li><a class="china"><img src="/static/limitless/assets/images/flags/cn.png" alt=""> Chinese</a></li>
          <li><a class="arabic"><img src="/static/limitless/assets/images/flags/ae.png" alt=""> Arabic</a></li>
        </ul>
      </li>

      <li class="dropdown dropdown-user">
        <a class="dropdown-toggle" data-toggle="dropdown" >
          <i class="icon-primitive-dot" id="socket_status"></i>
          <span>admin superuser</span>
          <i class="caret"></i>
        </a>

        <ul class="dropdown-menu dropdown-menu-right">
          <li>
            <form id="logout-form" action="/logout" method="POST" style="display: none;">
              <input type="hidden" name="_token" value="K5gLV9uq2zIMwJaw9G6hXEjCpjlIMeel2rU6leBv">
            </form>
            <a href="/logout" onclick="event.preventDefault(); document.getElementById('logout-form').submit();"><i class="icon-switch2"></i> Logout</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  name: 'navbar'
}

</script>