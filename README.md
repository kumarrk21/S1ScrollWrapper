# Salesforce1 Scroll Wrapper

This is a simple to use lightning component to enable smooth scrolling in Salesforce1 app. Salesforce1 app overrides/prevents certain default events to enable 'pull to refresh'. This causes un-intended consequences for scrollable content. There is a standard lightning component called [ui:scrollWrapper] that enables a scrollable container for Salesforce1. The Salesforce1 Scroll Wrapper component uses the ui:scrollWrapper but provides following additional capabilities

* Automatic height calculation and auto resizing when window dimensions change (for e.g. potrait to landscape
* An optional static top bar whose height is customizable
* An optional static bottom bar who height is customizable

# Usage
A sample usage is provided below
```sh
<aura:component implements="flexipage:availableForAllPageTypes,force:appHostable">
    <c:S1ScrollWrapper topHeight="50" bottomHeight="50">
        <c:S1ScrollWrapperTop>
            <p>Top Bar</p>
        </c:S1ScrollWrapperTop>
        <c:S1ScrollWrapperBody >
            <p>Scrollable Body</p>
        </c:S1ScrollWrapperBody >
        <c:S1ScrollWrapperBottom >
            <p>Bottom Bar</p>
        </c:S1ScrollWrapperBottom>
    </S1ScrollWrapper>
</aura:component>
```
The above sample creates a top bar of height 50px, bottom bar of height 50px and places the body in the scrollable area. There is also a ready to use example component [S1ScrollWrapperExComp] provided in the src folder.

In case of using this component in a VF page using Lightning Out, additional CSS need to be applied on the html and body tags. A sample is provided in the [S1ScrollWrapperExVFPage] within the src folder.

You can either deploy these components in your dev org using the 'Deploy to Salesforce' link below or using the [package]

<a href="https://githubsfdeploy.herokuapp.com?">
  <img alt="Deploy to Salesforce"
       src="https://raw.githubusercontent.com/afawcett/githubsfdeploy/master/deploy.png">
</a>

[ui:scrollWrapper]: <https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/aura_compref_ui_scrollerWrapper.htm>
[S1ScrollWrapperExComp]: <https://github.com/kumarrk21/S1ScrollWrapper/tree/master/src/aura/S1ScrollWrapperExComp>
[S1ScrollWrapperExVFPage]: <https://github.com/kumarrk21/S1ScrollWrapper/blob/master/src/pages/S1ScrollWrapperExVFPage.page>
[package]: <https://login.salesforce.com/packaging/installPackage.apexp?p0=04t1a00000024U6>