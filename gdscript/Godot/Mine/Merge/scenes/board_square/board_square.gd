extends Control

@onready var item_label = $ItemRect/ItemLabel

func _ready():
	pass
	#item_label.text = "H"
	
func _get_drag_data(at_position: Vector2):
	print("get_drag_data")
	return self
