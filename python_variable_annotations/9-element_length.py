#!/usr/bin/env python3
"""7-to_kv.py"""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Returns a list of tuples with the length of each element in the input list."""
    return [(i, len(i)) for i in lst]
