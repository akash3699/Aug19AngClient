package com.app.demo.service;

import java.util.List;

public interface ITaxService {
   String getTaxBracket(int income);
   List<String> allBrackets();
}
