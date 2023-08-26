extends Control

var board_square: PackedScene = preload("res://scenes/board_square/board_square.tscn")
@export var cols: int = 6
@export var rows: int = 6
@onready var grid = $MC/Grid

var _board_squares = {}

const GRID_CONTAINER_COLUMNS_PROPERTY = "columns"
# Called when the node enters the scene tree for the first time.
func _ready():
	grid.columns = cols
	
	create_board_squares()
	
	print("get children ", grid.get_child_count())



func create_board_squares() -> void:
	for n in (cols * rows): 
		var new_square = board_square.instantiate()
		grid.add_child(new_square)

