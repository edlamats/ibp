<template lang="html">
  <div class="sidebar sidebar-main sidebar-fixed sidebar-default">
    <div class="sidebar-content">
      <!-- Main navigation -->
      <div class="sidebar-category sidebar-category-visible">
        <div class="category-content no-padding">
          <ul class="navigation navigation-main navigation-accordion">
            <!-- Main -->
            <li class="navigation-header"><span>Back Office Menu</span> <i class="icon-menu" title="System menu"></i></li>
            <li class=""><a href="."><i class="icon-home4"></i> <span>Dashboard</span></a></li>
            <li class=""><a href="/clients"><i class="icon-users2"></i> <span>Clients</span></a></li>
            <li class=""><a href="/account_request"><i class="icon-wallet"></i> <span>Accounts</span></a></li>
            <!---->
            <li class=""><a href="/account_pin"><i class="icon-wallet"></i> <span>Pin</span></a></li>
            <!---->
            <li class=""><a href="/deposit_request"><i class="icon-drawer-in"></i> <span>Deposits</span></a></li>
            <li class=""><a href="/transfer_request"><i class="icon-transmission"></i> <span>Internal Transfers</span></a></li>
            <li class=""><a href="/withdrawal_request"><i class="icon-drawer-out"></i> <span>Withdrawals</span></a></li>
            <li class=""><a href="#"><i class="icon-user-lock"></i> <span>Access Management</span></a>
              <ul>
                <li class=""><a href="/users"><i class="icon-users"></i> <span>Users</span></a></li>
                <li class=""><a href="/roles"><i class="icon-user-tie"></i> <span>Roles</span></a></li>
                <li class=""><a href="/permissions"><i class="icon-file-eye2"></i> <span>Permissions</span></a></li>
              </ul>
            </li>
            <li ><a href="#"><i class="icon-cog2"></i> <span>Settings</span></a>
              <ul>
                <li class=""><a href="/offices"><i class="icon-office"></i> <span>Offices</span></a></li>
                <li class=""><a href="/tags"><i class="icon-price-tag2"></i> <span>Tags</span></a></li>
                <li class=""><a href="/countries"><i class="icon-earth"></i> <span>Countries</span></a></li>
                <li class=""><a href="/currencies"><i class="icon-cash3"></i> <span>Currencies</span></a></li>
                <li class=""><a href="/payment_methods"><i class="icon-direction"></i> <span>Payment methods</span></a></li>
                <li class=""><a href="/settings_account"><i class="icon-book3"></i> <span>Accounts</span></a></li>
                <li class=""><a href="/social_networks"><i class="icon-share3"></i> <span>Social Networks</span></a></li>
                <li class=""><a href="/document_type"><i class="icon-file-text"></i> <span>Document Types</span></a></li>
                <li class=""><a href="/settings_account"><i class="icon-wallet"></i> <span>Accounts</span></a></li>
                <li class=""><a href="/quiz"><i class="icon-stack-text"></i> <span>Quiz</span></a></li>
                <li class=""><a href="/sms_provider"><i class="icon-mobile"></i> <span>Sms Providers</span></a></li>
              </ul>
            </li>
            <!-- /main -->
          </ul>
        </div>
        {{ page }}
      </div>
      <!-- /main navigation -->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    props: ['page'],
    computed: {
      parentData: function () {
        return this.$parent.$type // or whatever you want to access
      }
    },
    methods: {
      // updateType(type) {
      //   this.$emit('type-updated', type)
      // }
    }
  }
</script>