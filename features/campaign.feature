Feature: Automating the volvocars Campaign page

    Scenario: TC-001 Navigating to homepage, click on ourcars link on top right corner and verify the available vehicles

        Given the start page is the homepage
        When the Ourcars link is clicked on the top right corner
        Then 3 SUV hybrid models of vehicles are present 

    Scenario: TC-002 Verify that under Hydrids, 4th SUV models is not present

        Given Homepage is launched
        When Click in Our Cars link
        Then 4th SUv model is not present
    
    Scenario: TC -003 Verify that under Hybrids there are 2 estate models
        Given I am on the homepage
        When ourCars is clicked
        Then Only 2 models of estate cars are seen under hybrid
        
    
    Scenario: TC -004 Verify that under Hybrids there are 2 Sedan models
        Given I am on the homepage
        When ourCars is clicked
        Then only 2 models of Sedan cars are seen under hybrid

    Scenario: TC -005 Verify that Hybrid is selected by default
        Given I am on the homepage
        When ourCars is clicked
        Then Hybrid Variant is selected by default
        And Electric variant is greyed
        And Mild hybrids variant is greyed
    
    Scenario: TC -006 Verify that when Electric variant is selected,other 2 variants are greyed out
        Given I am on our Cars page
        When Electric variant is clicked
        Then Electric Variant is enabled
        And Hybrid variant is greyed
        And Mild hybrids variant is greyed

    

    
    