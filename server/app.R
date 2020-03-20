#Load Packages & Data
library(shiny)
library(shinythemes)
library(dplyr)
library(readr)
library(shinyjs)
#sales_data <- read_csv("data/sales-data.csv")

# Define UI
ui <- fluidPage(
  useShinyjs(),  # include shinyjs
  
  actionButton("button", "Click me"),
  textInput("text", "Text")
)



# Define server function
server <- function(input, output) {
  observeEvent(input$button, {
    toggle("text") 
  })
}



# Create Shiny object
shinyApp(ui , server)